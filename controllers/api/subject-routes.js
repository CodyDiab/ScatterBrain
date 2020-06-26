const router = require('express').Router();
const { Subject } = require('../../models');
const withAuth = require('../../utils/auth');

/*
router.get('/', (req, res) => {
   Subject.findAll({})
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});
*/

router.get('/:id', (req, res) => {
   Subject.findAll({
      where: {
         user_id: req.params.id
      }
   })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});


router.post('/', withAuth, (req, res) => {
   // check the session
   if (req.session) {
     Subject.create({
       title: req.body.title,
       
       // use the id from the session
       user_id: req.session.user_id
     })
       .then(dbCommentData => res.json(dbCommentData))
       .catch(err => {
         console.log(err);
         res.status(400).json(err);
       });
   }
 });


router.delete('/:id', (req, res) => {
   Subject.destroy(
      {
         where: {
            id: req.params.id
         }
   })
      .then(dbCommentData => {
         if(!dbCommentData) {
            res.status(404).json({ message: 'No comment data found with this id' });
            return;
         }
         res.json(dbCommentData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;