import type { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  console.log('Function executed!');
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Netlify Function!',
    }),
  };
};

export { handler };
