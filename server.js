const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Cors

const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.json({ message: 'alive' });
});

/***  Explorers  */
app.get('/explorers', async (req, res) => {
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({ where: { id: parseInt(id) } });
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    };
    const message = 'Explorer creado.';
    await prisma.explorer.create({ data: explorer });
    return res.json({ message });
});

app.put('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    })

    return res.json({ message: "Actualizado correctamente" });
});

app.delete('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.delete({ where: { id: id } });
    return res.json({ message: "Eliminado correctamente" });
});

/*** Mission Commander */

app.get('/missionCommanders', async (req, res) => {
    const allMCs = await prisma.missionCommander.findMany({});
    res.json(allMCs);
});

app.get('/missionCommanders/:id', async (req, res) => {
    const id = req.params.id;
    const missionCommander = await prisma.missionCommander.findUnique({ where: { id: parseInt(id) } });
    res.json(missionCommander);
});

app.post('/missionCommanders', async (req, res) => {
    const MissionCommander = {
        name: req.body.name,
        lang: req.body.lang,
        missionCommander: req.body.missionCommander,
        enrollments: req.body.enrollments,
        hasCertification: req.body.hasCertification,
    };
    const message = 'Mission Commander creado.';
    await prisma.missionCommander.create({ data: MissionCommander });
    return res.json({ message });
});

app.put('/missionCommanders/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.missionCommander.update({
        where: {
            id: id
        },
        data: {
            enrollments: req.body.enrollments
        }
    })

    return res.json({ message: "Actualizado correctamente" });
});

app.delete('/missionCommanders/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.missionCommander.delete({ where: { id: id } });
    return res.json({ message: "Eliminado correctamente" });
});


/** Listen Port */
app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});