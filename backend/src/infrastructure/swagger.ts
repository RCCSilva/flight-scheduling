import type { Express } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Document',
      version: '1.0.0',
    },
  },
  apis: ['./src/**/*.routes.ts'],
  tags: [
    {
      name: 'Users',
      description: 'API for users in the system',
    },
  ],
}

const swaggerSpec = swaggerJSDoc(options)

export const configSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
