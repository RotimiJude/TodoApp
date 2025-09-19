import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'


export default function Home() {
  const {user} = useAuthContext()
  const {documents, error} = useCollection('todolist',
  ["uid", "==", user.uid],
  ["createdAt", "desc"]
  )
  return (
    <div>
      <div>
        {error && <p>{error}</p>}
        {documents && <TodoList todolist={documents}/>}
      </div>
      <TodoForm uid={user.uid}/>
    </div>
  )
}
