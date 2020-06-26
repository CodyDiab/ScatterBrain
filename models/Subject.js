const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subject extends Model {}

Subject.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      comment_text: {
         type: DataTypes.TEXT,
         allowNull: true,
         validate: {
            len: [1]
         }
      },
      user_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'user',
            key: 'id'
         }
      },
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'subject'
   }
);

module.exports = Subject;