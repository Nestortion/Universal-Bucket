import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql'

import { PersonModel, syncPersonModel } from '../models/person.js'

syncPersonModel()

//Person Type
const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    nationality: { type: GraphQLString },
    motto: { type: GraphQLString },
  }),
})

//Queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    persons: {
      type: new GraphQLList(PersonType),
      async resolve(parent, args) {
        return await PersonModel.findAll()
      },
    },
    person: {
      type: PersonType,
      args: { id: { type: GraphQLInt } },
      async resolve(parent, args) {
        return await PersonModel.findOne({ where: { id: args.id } })
      },
    },
  },
})

const schema = new GraphQLSchema({
  query: RootQuery,
})

export default schema
