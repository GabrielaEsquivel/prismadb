const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: 'Woopa' },
            update: {},
            create: {
                name: 'Woopa',
                username: 'ajolonauta',
                mission: 'Node'
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: 'Woopa1' },
            update: {},
            create: {
                name: 'Woopa1',
                username: 'ajolonauta1',
                mission: 'Node'
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: 'Woopa 2' },
            update: {},
            create: {
                name: 'Woopa 2',
                username: 'ajolonauta2',
                mission: 'Java'
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: 'Woopa 3' },
            update: {},
            create: {
                name: 'Woopa 3',
                username: 'ajolonauta3',
                mission: 'Node'
            },
        });

        const andreaExplorer = await prisma.explorer.upsert({
            where: { name: 'Andrea Gabriela Esquivel' },
            update: {},
            create: {
                name: 'Andrea Gabriela Esquivel',
                username: 'GabrielaEsquivel',
                mission: 'Node'
            },
        });
        console.log('Create 4 explorers');

        const CarloMC = await prisma.missionCommander.upsert({
            where: { name: 'Carlo' },
            update: {},
            create: {
                name: 'Carlo',
                lang: 'es',
                missionCommander: 'Carlo Guilmar',
                enrollments: 2,
                hasCertification: false,
            },
        });

        const RodrigoMC = await prisma.missionCommander.upsert({
            where: { name: 'Rodrigo' },
            update: {},
            create: {
                name: 'Rodrigo Martinez',
                lang: 'es',
                missionCommander: 'Frontend',
                enrollments: 1,
                hasCertification: true,
            },
        });
        const FerMC = await prisma.missionCommander.upsert({
            where: { name: 'Fer Ochoa' },
            update: {},
            create: {
                name: 'Fer Ochoa',
                lang: 'es',
                missionCommander: 'Java',
                enrollments: 3,
                hasCertification: true,
            },
        });

        console.log("Se agregaron 3 Mission Commanders")
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();