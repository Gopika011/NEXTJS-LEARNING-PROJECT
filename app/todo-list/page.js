import TodoForm from "@/components/todoForm"
import Todos from "@/components/todos"
import React from "react"

export default function ToDo()
{
    return (
        <div className="max-w-lg"> 
            <TodoForm></TodoForm>
            <Todos></Todos>
        </div>
    )
}