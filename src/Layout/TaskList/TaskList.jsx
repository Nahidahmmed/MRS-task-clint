import { useLoaderData } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
// import Swal from "sweetalert2";



const TaskList = () => {
    const tasks = useLoaderData()

    // const handleDelete = task => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this task!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`https://assignment-mrs-server.vercel.app/tasks/${task._id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your file has been deleted.',
    //                             'success'
    //                         )
    //                     }
    //                 })
    //         }
    //     })
    // }



    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Task List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tasks.map((task, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex">
                                <h3 className="text-lg font-semibold mr-auto mb-2">{task.title}</h3>
                                <button className="text-red-500 pb-5" onClick={() => handleDelete(task)}><FaTrash></FaTrash></button>
                                <button className="text-green-500 pl-4 pb-5"><RxUpdate></RxUpdate></button>
                            </div>
                            <p className="text-gray-600 mb-4">{task.description}</p>
                            <div className={`text-sm px-3 py-1 rounded ${task.status === 'todo' ? 'bg-red-500 text-white' : task.status === 'inprogress' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                                {task.status === 'todo' ? 'ToDo' : task.status === 'inprogress' ? 'In Progress' : 'Done'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskList;