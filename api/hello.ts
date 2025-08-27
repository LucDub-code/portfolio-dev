import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const config = { runtime: 'edge' };

const app = new Hono().basePath('/api');
app.get('/hello', (c) => c.text('Hello Lucas from Hono'));

export default handle(app);