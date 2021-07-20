const router = require('express').Router();
const { Item, Type, Tag, ItemTag } = require('../../models');

// The `/api/Items` endpoint

// get all Items
router.get('/',async(req, res) => {
  // find all Items
  // be sure to include its associated Type and Tag data
  try{
    const itemsData = await Item.findAll({
      attributes: ['id','item_name','price','stock'],
      include:[{model:Type,
        attributes:['type_name'],
      },
      { model:Tag,through:ItemTag,
        attributes:['tag_name'],
      }],
    });
    res.status(200).json(itemsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one Item
router.get('/:id',async(req, res) => {
  // find a single Item by its `id`
  // be sure to include its associated Type and Tag data
  try {
    const itemsData = await Item.findByPk(req.params.id, {
      attributes: ['id','item_name','price','stock'],
      include: [{ model: Type,
        attributes:['type_name'],
      },
      { model: Tag, through: ItemTag,
        attributes:['tag_name'],
      }],
    });
    if (!itemsData) {
      res.status(404).json({message: 'No Item here!'});
      return;
    }
    res.status(200).json(itemsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new Item
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      item_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Item.create(req.body)
    .then((item) => {
      // if there's item tags, we need to create pairings to bulk create in the itemTag model
      if (req.body.tagIds.length) {
        const itemTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            item_id: item.id,
            tag_id,
          };
        });
        return ItemTag.bulkCreate(itemTagIdArr);
      }
      // if no Item tags, just respond
      res.status(200).json(item);
    })
    .then((itemTagIds) => res.status(200).json(itemTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update Item
router.put('/:id', (req, res) => {
  // update Item data
  Item.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((item) => {
      // find all associated tags from ItemTag
      return ItemTag.findAll({ where: {
         item_id: req.params.id 
        } 
      });
    })
    .then((itemTags) => {
      // get list of current tag_ids
      const itemTagIds = itemTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newItemTags = req.body.tagIds
        .filter((tag_id) => !itemTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            item_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const itemTagsToRemove = itemTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ItemTag.destroy({ where: {
           id: itemTagsToRemove 
          } 
        }),
        ItemTag.bulkCreate(newItemTags),
      ]);
    })
    .then((updatedItemTags) => res.json(updatedItemTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one Item by its `id` value
  try {
    const itemsData = await Item.destroy({
      where: {
         id: req.params.id 
        }
    });
    if (!itemsData) {
      res.status(404).json({message: 'No Item here!'});
      return;
    }
    res.status(200).json(itemsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;