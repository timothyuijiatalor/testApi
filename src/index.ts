import 'reflect-metadata';
import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(express.static('assets/')); // makes certain folders public so that they can be directly accessed from browser
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  return next();
});

app.get('/test', (_: Request, res: Response) => res.send('ok'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
