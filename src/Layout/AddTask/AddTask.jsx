
import gif from '../../assets/image_processing20200603-30491-3ivbmx.gif';
import { useForm } from 'react-hook-form';

const AddTask = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
         fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
        
    };
    console.log(errors);
   

    

    return (
        <div className=" lg:flex mx-9 gap-4 my-40">
           
            <div className="bg-white p-8 rounded-lg shadow-md lg:w-2/4">
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="title" className="text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="input input-bordered w-full"
                        placeholder="title"
                        {...register("title", {required: true, maxLength: 80})}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="textarea textarea-bordered w-full"
                        rows="3"
                        placeholder="description"
                        {...register("description", {required: true, maxLength: 180})}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="status" className="text-sm font-medium text-gray-700">
                        Status
                    </label>
                    <select
                        id="status"
                        className="select select-bordered w-full"
                        placeholder="status"
                        {...register("status", {required: true})}
                    >
                        <option value="">Select Status</option>
                        <option value="todo">toDo</option>
                        <option value="inProgress">inprogress</option>
                        <option value="done">done</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Add Task
                </button>
            </form>
        </div>
        <img className="w-[700px] h-1/3" src={gif} alt="" />
        </div>
    );
};

export default AddTask;