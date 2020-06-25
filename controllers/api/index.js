const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const subjectRoutes = require('./subject-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/subjects', subjectRoutes);

module.exports = router;