'use server';

import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache';
import { permanentRedirect } from 'next/navigation';


export const createTask = async (formData) =>{
    
      const content = formData.get('content')
      console.log(content);
  
      await prisma.task.create({
        data: {
          content: content
        }
      })
  
      revalidatePath('/todo-list'); //reload
}

export const getAllTask = async () =>{

    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt : 'desc'
        }
    })
    return tasks;
}
  

export const deleteTask = async (formData) =>{
    const id = formData.get('idInput'); //get value of the input

    await prisma.task.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/todo-list');
}



//get info about a page on a single task
export const getTask = async (id) => {
    return prisma.task.findUnique({
        where: {
            id: id
        }
    })
}


//edit after editing
export const editTask = async(formData) =>{
    const id=formData.get('idinput');
    const content=formData.get('content');
    const completed=formData.get('completed');

    await prisma.task.update({
        where: {
            id: id
        },
        data: {
            content: content,
            completed: completed === "on",
        },
    });

    permanentRedirect('/todo-list');
}