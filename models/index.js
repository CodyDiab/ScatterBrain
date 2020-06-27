const Post = require('./Post');
const Subject = require('./Subject');
const User = require('./User');


User.hasMany(Subject, {
   foreignKey: 'user_id'
});

Subject.belongsTo(User, {
   foreignKey: 'user_id'
});

Subject.hasMany(Post, {
   foreignKey: 'post_id'
});

Post.belongsTo(Subject, {
    foreignKey: 'subject_id',
    onDelete: 'CASCADE'
 });




module.exports = {
   User,
   Post,
   Subject
};