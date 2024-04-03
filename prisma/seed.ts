import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "179438c4-bdf8-4446-919a-9e915880a39d",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para devs",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
