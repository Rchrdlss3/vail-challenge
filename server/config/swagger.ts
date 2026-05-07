import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'vail-server',
      version: '0.0.0',
      description: 'API documentation for the REST service',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
  },
  // Path to your API routes to extract JSDoc comments
  apis: ['../../server/routes/*.ts'], 
};

export const swaggerSpec = swaggerJsdoc(options);
