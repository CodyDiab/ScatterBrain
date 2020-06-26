const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Subject } = require('../models');


//init render if not logged in
router.get('/', (req, res) => {
   if (req.session.loggedIn) { //add session id?
     const id = req.session.user_id
     res.redirect(`/subjects/${id}`);
     return;
   }
 
   res.render('login');
});
//when logged in
router.get('/posts/:id', (req, res) => {
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


//when loged in
router.get('/subjects/:id', (req, res) => {
   console.log(req.session)
   Subject.findAll({
     where: {
       user_id: req.params.id
     },
   //   attributes: [
   //     'id',
   //      'title',
   //      'user_id',
   //     'created_at',
      
   //   ],
   //   include: [
   //     {
   //       model: User,
   //       attributes: ['username'],
   //       },
   //      { model: Post,
   //       attributes: ['id']

   //     },
      //  {
      //    model: User,
      //    attributes: ['username']
      //  }
     //]
   })
     .then(dbSubjectData => {
       if (!dbSubjectData) {
         res.render('homepage',{
            loggedIn: req.session.loggedIn
         })
       }
 
       // serialize the data
       const post = dbSubjectData.get({ plain: true });
 
       // pass data to template
       res.render('homepage', { 
          post, 
          loggedIn: req.session.loggedIn
         });
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
});

module.exports = router;