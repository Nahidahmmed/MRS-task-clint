import { useLoaderData } from "react-router-dom";


const TaskList = () => {
    const tasks = useLoaderData()

  

    return (
        <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Task List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                <p className="text-gray-600 mb-4">{task.description}</p>
                <div className={`text-sm px-3 py-1 rounded ${task.status === 'todo' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                  {task.status === 'todo' ? 'To Do' : 'Done'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default TaskList;