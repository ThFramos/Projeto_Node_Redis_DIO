import 'dotenv/config';
import express from 'express';
import {setQueues,router, BullAdapter} from 'bull-board';


import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();
setQueues(Queue.queues.map(queue => new BullAdapter(queue.bull)), { readOnlyMode: true });

app.use(express.json());

app.post('/users', UserController.store);
app.use('/admin/queue', router);



app.listen(process.env.PORT,() =>{
  console.log(`Server running on the ${process.env.PORT}`)
});