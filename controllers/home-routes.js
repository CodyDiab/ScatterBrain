const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Subject } = require('../models');
const withAuth = require('../utils/auth')

//init render if not logged in
router.get('/', (req, res) => {
   if (req.session.loggedIn) { //add session id?
     const id = req.session.user_id
     res.redirect(`/subjects/${id}`);
     return;
   }
 
   res.render('login');
});
//when logged in single subjects resources
router.get('/posts/:id',withAuth, (req, res) => {
   console.log(req.session);
    Post.findAll({
       where: {
          subject_id: req.params.id
       },
      attributes: [
         'id',
         'post_url',
         'title',
         'notes',
         'subject_id',
         'created_at',
      ],
      include: [
         {
            model: Subject,
            attributes: ['id', 'user_id', 'title', 'created_at'],
            include: {
               model: User,
               attributes: ['username']
            }
         },
     /*    {
            model: User,
            attributes: ['username']
         } */
      ]
   })
      .then(dbPostData => {
         // pass a single post object into the homepage template
         console.log(dbPostData[0]);
         const posts = dbPostData.map(post => post.get({ plain: true }));
         res.render('subject', { 
            posts,
            loggedIn: req.session.loggedIn
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});


//when loged in all users subjects
router.get('/subjects/:id',withAuth, (req, res) => {
   console.log(req.session)
   Subject.findAll({
     where: {
       user_id: req.params.id
     },
     attributes: [
       'id',
        'title',
        'user_id',
       'created_at',
      
     ],
     include: [
       {
         model: User,
         attributes: ['id','username'],
         },
        { model: Post,
         attributes: ['subject_id']

       },
      
     ]
   })
     .then(dbSubjectData => {
        console.log(dbSubjectData)
       
     
 
       // serialize the data
       const subjects = dbSubjectData.map(subject => subject.get({ plain: true }));
 
       // pass data to template
       res.render('homepage', { 
          subjects, 
         loggedIn: req.session.loggedIn
         });
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
});

module.exports = router;