

interface SeedData {
  entries: SeedEntry[];
}


interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}


export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Id eu incididunt id incididunt magna.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "En progreso: Consequat adipisicing excepteur incididunt eiusmod duis aliqua.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Finalizado: Voluptate sit occaecat dolor tempor non sunt laborum do irure non irure.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ]
}