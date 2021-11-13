import "reflect-metadata";
import  { Express, Request, Response, NextFunction } from 'express';
import * as express from 'express';
const app: Express = express();

app.use(express.json());
app.use(express.static('assets/')); // makes certain folders public so that they can be directly accessed from browser

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS, DELETE',);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    return next();
});  

app.get('/test', (req: Request, res: Response, next: NextFunction)=> res.send('ok'));

const port = 9000;
app.listen(port, ()=> console.log(`Server is listening on port ${port}`));
 