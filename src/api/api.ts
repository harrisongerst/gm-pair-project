import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import HabitTile from '../components/HabitTile/HabitTile';

const app = express();
const prisma = new PrismaClient();

const corsOptions = {
	origin: '*',
	credentials: true,
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.get('/habit', async (req, res) => {
	const body = await prisma.habits.findMany();
	res.json(body);
});
app.post('/habit', async (req, res) => {
	const result = await prisma.habits.create({
		data: {
			...req.body,
			start_date: new Date(req.body.start_date),
			end_date: new Date(req.body.end_date),
		},
	});

	res.send(result);
});

app.delete('/habit', async (req, res) => {
	const response = await prisma.habits.deleteMany({});
	res.send(response);
});

app.patch('/habit', async (req, res) => {
	const { count, id } = req.body;
	const response = await prisma.habits.update({
		where: { id: id },
		data: { count: count },
	});
	res.send(response);
});

app.listen(8080, () => {
	console.log('listening on port 8080');
});
