import { editTask } from '@/utils/actions';
import React from 'react'

const EditForm = ({task}) => {
    const {id,content,completed} =task; //destructure

  return (
    <form action={editTask} className='max-w-sm p-12 border border-base-300 rounded-md'>
        <input type='hidden' name='idinput' value={id}></input>
        <input type='text' name='content' defaultValue={content} required className='input input-bordered w-full'></input>

        <div className='form-control my-4'>
            <label className='label cursor-pointer' htmlFor='completed'>
                <span className='label-text'>Completed</span>
                <input type='checkbox' defaultChecked={completed} id='completed' name='completed' className='checkbox checkbox-primary checkbox-sm'></input>
            </label>
        </div>
        <button type='submit' className='btn btn-primary btn-block btn-sm'>edit</button>
    </form>
  )
}

export default EditForm


//need to display a page with its current info - utils - page - actions 
//pass a id - to get info about particular task 

//update edits  - editTask  - after editing the form