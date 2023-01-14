import { toast } from 'react-toastify';
import { useGetAllTodos } from './../../hooks';
import { CustomCard as Card } from './components';

const Notification = () => {
    //Options for react-toast
    const options = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }
    toast.success("Data is loaded!", options)
}




const ListTodos = () => {
    // if length of array is more than 1, mean data loaded from jsonplaceholder api
    const todos = useGetAllTodos()
    const isDataAvailable = todos.length > 0;


    return (
        <div className="App">
            {
                isDataAvailable && todos.map(todo => {
                    return <Card key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
                })
            }
        </div>
    )
}

export default ListTodos
