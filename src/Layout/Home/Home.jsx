import { useLoaderData } from "react-router-dom";


const Home = () => {

const tasks = useLoaderData()

  return (
    <div className="">
      <div className="">
        <div className="hero  h-[700px] " style={{ backgroundImage: "url(https://i.ibb.co/hdCHSfS/entrepreneur-593352.jpg)" }}>
          <div className=" "></div>
          <div className=" text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
              <input type="text" placeholder="scratch" className="input input-bordered w-full max-w-xs" />
              <button className="btn bg-orange-500 text-white hover:text-orange-500 hover:border-orange-500 hover:bg-orange-200 normal-case text-base">Scratch</button>
              <h1 className="text-3xl font-bold mt-3">Bangladeshs Largest task giving  Website!</h1>
              <p className="text-xl font-semibold">Find tasks, Compare tasks Ratings, Explore tasks.</p>

            </div>
          </div>
        </div>
      </div>

      {/* top tasks */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Task List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                <p className="text-gray-600 mb-4">{task.description}</p>
                <div className={`text-sm px-3 py-1 rounded ${task.status === 'todo' ? 'bg-red-500 text-white' : task.status === 'inprogress' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                  {task.status === 'todo' ? 'ToDo' : task.status === 'inprogress' ? 'In Progress' : 'Done'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;