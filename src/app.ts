import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the assignment-2 server!',
  });
});

export default app;
