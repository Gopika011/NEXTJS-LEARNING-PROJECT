import React from 'react'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache';
import { createTask } from '@/utils/actions';

// const createTask = async (formData) =>{
//   'use server';

//     const content = formData.get('content')
//     console.log(content);

//     await prisma.task.create({
//       data: {
//         content: content
//       }
//     })

//     revalidatePath('/todo-list');
// }

//move this to a seperate actions file to perform all the server actions

const TodoForm = () => {
  return (
    <form action={createTask} className='join w-full mb-8'>
      <input className='input input-bordered join-item w-full'
      type='text'
      placeholder='type here..'
      name='content'
      required
      ></input>
  <button className='btn btn-primary join-item' type='submit'>create task</button>
    </form>
  )
}

export default TodoForm