const typeDefs = `#graphql
    type User {
        id: ID!
        email: String!
        username: String!
        bookCount: Int!
        savedBooks: [Book]!
    }

    type Book {
        bookId: String!
        authors: [String]!
        description: String!
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User!
    }