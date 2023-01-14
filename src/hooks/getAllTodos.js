import React, { useState, useEffect } from 'react'


export const useGetAllTodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
            // .finally(() => Notification())
    }, [])


    return todos
}
