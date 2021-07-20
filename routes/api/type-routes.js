const router = require('express').Router();
const { Type, Item } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async(req, res) => {
  // find all categories
  // be sure to include its associated Items
  try {
    const categoriesData = await Type.findAll({
      include: [{ model: Item,
        attributes: ['id','item_name','price','stock'],
      }]
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id',async(req, res) => {
  // find one Type by its `id` value
  // be sure to include its associated Items
  try {
    const categoriesData=await Type.findByPk(req.params.id, {
      include: [{model: Item,
        attributes: ['id','item_name','price','stock'],
      }]
    });

    if (!categoriesData) {
      res.status(404).json({message:'No Type here!'});
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/',async(req, res) => {
  // create a new Type
  try {
    const categoriesData = await Type.create(req.body);
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a Type by its `id` value
  try {
    const categoriesData = await Type.update(req.body, {
      where: {
        id:req.params.id
      }
    });
    if (!categoriesData) {
      res.status(404).json({message:'No Type here!'});
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a Type by its `id` value
  try {
    const categoriesData = await Type.destroy({
      where: {
        id:req.params.id
      }
    });
    if (!categoriesData) {
      res.status(404).json({message:'No Type here!'});
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;