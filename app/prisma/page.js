import React from "react";
import prisma from "@/utils/db";

const getAllTasks = async () => {
  await prisma.task.create({
    data: {
      content: "Get milk",
    },
  });

// await prisma.task.update({
//     where: {
//         id: '90b3454d-bead-4279-a974-c917494f9fb4',
//     },
//     data: {
//         content: "Get milk completed",
//     },
// })

// await prisma.task.delete({
//     where: {
//         id: '90b3454d-bead-4279-a974-c917494f9fb4'
//     },
// })

  const allTasks = await prisma.task.findMany();
  return allTasks;
};

export default async function Prisma() {
  const job = await getAllTasks();
  //job is an array, map through to get content - {job[0].content}
  return (
    <div>
      <h1 className="text-5xl font-bold mb-5">Tasks</h1>

      {job.map((task) => (
        <li className="text-xl menu menu-vertical">
            {task.content}
            </li>
      ))}
    </div>
  );
}
