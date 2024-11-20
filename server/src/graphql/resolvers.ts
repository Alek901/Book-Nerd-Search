const resolvers = {
    Query: {
        protectedResource: (parent, args, context) => {
            const user = authenticateGraghQLRequest(context);

            return `Hello, ${user.username}! This is a protected resource or is it???? JK got you.`;
        }
    }
};