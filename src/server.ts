import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const port: number = 3000;

// Serve static files from the 'public' directory

var publicPath = path.join(__dirname, '../public');
console.log('Serving static files from:', publicPath);

app.use(express.static(publicPath));

// Optional:  A catch-all route for any request that doesn't match a static file.
// This is useful for single-page applications (SPAs) where you want the client-side
// JavaScript router to handle navigation.  Remove this if you don't need it.
 app.get('*', (req: Request, res: Response) => {
     res.sendFile(path.join(__dirname, '../public', 'index.html'));
 });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});