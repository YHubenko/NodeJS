import express, { Request, Response } from 'express';

interface User {
    id: number;
    username: string;
    name?: string;
}

let users: User[] = [];
let currentId = 1;

const app = express();
app.use(express.json());

// Створення користувача
app.post('/users', (req: Request, res: Response) => {
    const { username, name } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    const newUser: User = {
        id: currentId++,
        username,
        name
    };

    users.push(newUser);

    return res.status(201).json(newUser);
});

// Отримання даних користувача за його id
app.get('/users/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
});

// Список користувачів
app.get('/users', (_req: Request, res: Response) => {
    return res.json(users);
});

// Оновлення даних користувача за його id
app.put('/users/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { username, name } = req.body;
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    const updatedUser: User = {
        id,
        username: username || users[userIndex].username,
        name: name || users[userIndex].name
    };

    users[userIndex] = updatedUser;

    return res.json(updatedUser);
});

// Видалення користувача за його id
app.delete('/users/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);

    return res.json(deletedUser);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});