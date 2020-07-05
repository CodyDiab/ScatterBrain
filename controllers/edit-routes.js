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

router.get('/posts/:id/:subId',withAuth, (req,res) => {
   Post.findOne({
       where: {
       id: req.params.id,
       subject_id: req.params.subId
   },
   attributes: [
       'id',
       'title',
       'post_url',
       'notes',
       'subject_id',
       'created_at'
      
   ],
   include: [
       {
           model: Subject,
           attributes: ['id','title'],
           
           
      },
  
   ]
   }) 
   .then(dbResourceData => {
      console.log(dbResourceData)
       const post = dbResourceData.get({ plain: true });
      
       res.render('edit-resource', {
        post,
        loggedIn: true
       });
   })
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

module.exports = router;