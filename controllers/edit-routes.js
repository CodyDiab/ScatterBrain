const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Subject } = require('../models');
const withAuth = require('../utils/auth');

router.get('/subject/:id',withAuth, (req,res) => {
   Subject.findOne({
       where: {
       id: req.params.id
   },
   attributes: [
       'id',
       'title',
       'created_at',  
      
   ],
   // include: [
   //     {
   //         model: Post,
   //         attributes: ['id'],
           
           
   //     },
   //     {
   //         model: User,
   //         attributes: ['username']
   //     }
   // ]
   }) 
   .then(dbSubjectData => {
      console.log(dbSubjectData)
       const subject = dbSubjectData.get({ plain: true });
      
       res.render('edit-subject', {
        subject,
        loggedIn: true
       });
   })
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

module.exports = router;