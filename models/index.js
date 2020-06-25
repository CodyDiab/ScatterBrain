const Post = require('./Post');
const Subject = require('./Subject');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'user_id'
 });
 
 Post.belongsTo(User, {
    foreignKey: 'user_id',
 });

 Subject.belongsTo(User, {
    foreignKey: 'user_id'
 });

 Subject.belongsTo(Post, {
    foreignKey: 'post_id'
 });

 User.hasMany(Subject, {
    foreignKey: 'user_id'
 });

 Post.hasMany(Subject, {
    foreignKey: 'post_id'
 })

module.exports = {
   User,
   Post,
   Subject
};