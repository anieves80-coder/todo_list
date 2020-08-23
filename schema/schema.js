const graphQL = require('graphql');
const db = require('../db');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList,
    GraphQLSchema
} = graphQL;

const ListType = new GraphQLObjectType({
    name: "List",
    fields: {
        _id: { type: GraphQLID },
        description: { type: GraphQLString },
        date: { type: GraphQLString }
    }
});

const SearchQuery = new GraphQLObjectType({
    name: "SearchQueryType",
    fields: {
        searchById: {
            type: ListType,
            args: { id: { type: GraphQLString } },
            resolve: async (parentValue, args) => {
                const res = await db.dbListFindbyId(args.id);
                return res[0];
            }
        },
        getAll: {
            type: new GraphQLList(ListType),
            resolve: async () => {
                const res = await db.dbListFindAll();
                return res;
            }
        }
    }
});


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        deleteFromList: {
            type: ListType,
            args: { id: { type: GraphQLNonNull(GraphQLString) } },
            resolve: async (parentValue, args) => {
                const res = await db.dbListDelete(args.id);
                return { description: `${res.deletedCount} record deleted.` }
            }
        },
        addToList: {
            type: ListType,
            args: {
                description: { type: GraphQLNonNull(GraphQLString) },
                date: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: async (parentValue, args) => {
                const res = await db.dbListAdd(args);
                return res;
            }
        },
        updateFromList: {
            type: ListType,
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                date: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: async (parentValue, args) => {
                const res = await db.dbListUpdate(args);
                return { description: `${res.nModified} record modified.` };
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: SearchQuery,
    mutation
});