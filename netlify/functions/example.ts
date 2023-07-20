import type { Handler } from '@netlify/functions';
import fetch, { Response } from 'node-fetch';

const handler: Handler = async (event, context) => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  const tokenEndpoint = 'https://accounts.spotify.com/api/token';
  const authString = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const bodyParams = new URLSearchParams();
  bodyParams.append('grant_type', 'client_credentials');

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authString}`,
    },
    body: bodyParams.toString(),
  };

  try {
    const response: Response = await fetch(tokenEndpoint, requestOptions);
    const data: any = await response.json();

    console.log('Access Token:', data.access_token);

    return {
      statusCode: 200,
      body: JSON.stringify({ access_token: data.access_token }),
    };
  } catch (error) {
    console.error('Error fetching access token:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching access token' }),
    };
  }
};

export { handler };
