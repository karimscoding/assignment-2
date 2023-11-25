import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the assignment-2 server!',
  });
});

export default app;
