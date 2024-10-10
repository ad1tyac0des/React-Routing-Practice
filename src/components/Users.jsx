import {Link, Outlet} from 'react-router-dom';
const Users = () => {
  return (
    <div className="w-full h-[88vh] bg-zinc-300 flex flex-col items-center rounded-b">
      <h1 className='my-20 text-2xl font-semibold'>Users</h1>
      <div className='flex gap-20'>
        <Link className='text-md font-semibold bg-indigo-300 px-5 py-1 rounded hover:bg-indigo-400 transition-colors' to="/users/amit">Amit</Link>
        <Link className='text-md font-semibold bg-indigo-300 px-5 py-1 rounded hover:bg-indigo-400 transition-colors' to="/users/rohan">Rohan</Link>
        <Link className='text-md font-semibold bg-indigo-300 px-5 py-1 rounded hover:bg-indigo-400 transition-colors' to="/users/rohit">Rohit</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
