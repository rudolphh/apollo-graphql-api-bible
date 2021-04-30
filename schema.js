import { gql } from 'apollo-server';

export const typeDefs = gql`
  type AudioBibles {
    id: String
    name: String
    nameLocal: String
    description: String
    descriptionLocal: String
  }

  type Countries {
    id: String
    name: String
    nameLocal: String
  }

  type Language {
    id: String
    name: String
    nameLocal: String
    script: String
    scriptDirection: String
  }

  type Bible {
    bibleId: String
    dblId: String
    abbreviation: String
    abbreviationLocal: String
    name: String
    nameLocal: String
    description: String
    descriptionLocal: String
    relatedDbl: String
    type: String
    updatedAt: String
    audioBibles: [AudioBibles]
    countries: [Countries]
    language: Language
  }

  type Query {
    bibles: [Bible]
    bible(bibleId: String!): Bible
  }
`;
