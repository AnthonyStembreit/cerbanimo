const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const authRoutes = require('./auth-routes');
const skillRoutes = require('./skill-routes');
// const projectRoutes = require('./post-routes');
// const communityRoutes = require('./comment-routes');
router.use('/skill', skillRoutes);
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
// router.use('/project', projectRoutes);
// router.use('/community', communityRoutes);

module.exports = router;