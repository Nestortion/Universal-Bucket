import { DataTypes } from 'sequelize'

import DB from '../config/db.js'

const PersonModel = DB.define(
  'person',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

async function syncPersonModel() {
  try {
    await PersonModel.sync()
    console.log('sync successfull')
  } catch (error) {
    console.log('There was an error syncing the model', error)
  }
}

export { PersonModel, syncPersonModel }
