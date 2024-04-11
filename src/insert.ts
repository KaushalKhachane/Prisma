import { PrismaClient } from "@prisma/client";
// https://projects.100xdevs.com/tracks/gZf9uBBNSbBR7UCqyyqT/prisma-9  --> note
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
      username,
      password,
      firstName,
      lastName
    },
    select:{
      id: true,
      password: true,
      firstName: true
    }
  })
  console.log(res)
}

insertUser('Ritika','RDN','Ritika','Naphade') 