import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  // const user = await prisma.user.upsert({
  //   where: { email: "user@example.com" },
  //   update: {},
  //   create: {
  //     email: "user@example.com",
  //     name: "Jason",
  //   },
  // });
  // console.log({ user });

  // const user = await prisma.user.create({
  //   data: {
  //     email: "rajes@gmail.com",
  //     name: "Jason",
  //     password:"password",
  //     role:"Admin",
      
  //   },
  // });
  // console.log({ user });

  // creating sellers data from the sellers table

  // 
  
}

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
