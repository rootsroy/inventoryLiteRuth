const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll () method
    User.findAll()
    .then (dbUserData => res.json (dbUserData))
    .catch (err =>{
        console.log (err);
        res.status (500).json (err);
    })
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
            }
        })
            .then(dbUserData => {
                if (!dbUserData) {
                   res.status(404).json({ message: 'No user found with this ID' });
                   return; 
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                re.status(500).json(err);
            });
        });

// POST /api/users
router.post('/', (req, res) => {
    // expects Username/Email/PW
    User.create ({ 
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then (dbUserData => res.json (dbUserData))
        .catch (err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects Username Email and DB_PW

    //if req.body has exact key/value pairs to match use 'req.body'
    User.update(re.body,{
        where: {
            id: req.params.id
        }
    })
    .then (dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: 'No User found with this ID' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy ({
        where: { 
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
        res.status(404).json({ message: 'No User foun with this ID'});
        return;
    }
    res.json(dbUserData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;