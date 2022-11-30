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

  //create multiple products data in the product table
  
  
  const product = await prisma.products.createMany({
    data: [{
      prodName: "Apples",
      prodPrice: 2.99,
      prodDesc: "Fresh Apples",
      images: "https://images.unsplash.com/photo-1593642533141-8d4b8a8b3c00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      sellerId: 1,      
    },
    {
      prodName: "Oranges",
      prodPrice: 3.99,
      prodDesc: "Fresh Oranges",
      images: "https://images.unsplash.com/photo-1593642533141-8d4b8a8b3c00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      sellerId: 1,
    },
    {
      prodName: "Bananas",
      prodPrice: 1.99,
      prodDesc: "Fresh Bananas",
      images: "https://images.unsplash.com/photo-1593642533141-8d4b8a8b3c00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      sellerId: 1,
    },
    {
      prodName: "Pears",
      prodPrice: 2.99,
      prodDesc: "Fresh Pears",
      images: "https://images.unsplash.com/photo-1593642533141-8d4b8a8b3c00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      sellerId: 1,
    },
    {
      prodName: "Grapes",
      prodPrice: 2.99,
      prodDesc: "Fresh Grapes",
      images: "https://images.unsplash.com/photo-1593642533141-8d4b8a8b3c00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      sellerId: 1,
    },
    ]
  });
  console.log({ product });


  
}

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
