 import { ApolloServer } from 'apollo-server';
 import { typeDefs } from './schema.js'
 import mapKeys from 'lodash/mapKeys.js';
 import { BibleAPI } from './datasource.js';

const resolvers = {
  Query: {
    bible: (root, { bibleId }, { dataSources }) => dataSources.bibleAPI.getABible(bibleId),
    bibles: (root, args, { dataSources }) => dataSources.bibleAPI.getAllBibles(),
    books: (root, { bibleId }, { dataSources }) => dataSources.bibleAPI.getAllBooks(bibleId),
    book: (root, { bibleId, bookId }, { dataSources }) => dataSources.bibleAPI.getABook(bibleId, bookId)
  },
  Bible: {
    bibleId: ({ id }) => id, // id in rest api resolves to bibleId in graphql api 
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    bibleAPI: new BibleAPI()
  }),
  //playground: false
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});