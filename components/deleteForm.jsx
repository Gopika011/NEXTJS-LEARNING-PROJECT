import React from 'react'
import { deleteTask } from '@/utils/actions'


const DeleteForm = ({id}) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='idInput' value={id}></input>
      <button className='btn btn-error btn-xs'>Delete</button>
    </form>
  )
}

export default DeleteForm