const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Subject } = require('.');


class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_url: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
        
      },
      subject_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'subject',
          key: 'id'
        }
      },
      },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
 
 module.exports = Post;