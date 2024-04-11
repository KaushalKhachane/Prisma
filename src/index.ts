import { PrismaClient } from "@prisma/client";
// https://projects.100xdevs.com/tracks/gZf9uBBNSbBR7UCqyyqT/prisma-9  --> note  

const prisma = new PrismaClient();

// interface UpdateParams {
//     firstName: string;
//     lastName: string; 
// }

async function updateUser(username: string, {
    firstName,
    lastName
}: any) {
   prisma.user.update({
    where: {username: username},
    data: {
      firstName,
      lastName
    }
   })  
}