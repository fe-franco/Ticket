module.exports={
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Stay Delivery API',
      version: '1.0.0',
      description:
        'Servidor para aplicativo Stay Delivery',

      contact: {
        name: 'InfiniteDev',
        url: 'https://infinitedev.dev',
      },
    },
    servers: [
      {
        url: 'http://localhost:82',
        description: 'Servidor de desenvolvimento',
      },
    ],
  },
  apis: ['./src/routes/api/*.js'], // files containing annotations as above
};
