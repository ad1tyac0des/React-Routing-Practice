import { useNavigate, useParams } from "react-router-dom"

const UserDetails = () => {
    const {name} = useParams();
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate("/users")
    }

    return (
        <div className="w-full h-[88vh] bg-zinc-300 flex flex-col items-center rounded-b">
            <h1 className='mt-20 mb-10 text-2xl font-semibold'>User Details</h1>
            <p className="px-5 py-1 text-md font-semibold bg-yellow-100 rounded">Hey👋! {name.toUpperCase()}</p>
            <button onClick={handleGoBack} className="text-sm font-semibold mt-5 px-5 py-1 bg-indigo-300 hover:bg-indigo-400 transition-colors rounded">Go Back</button>
        </div>
    )
}

export default UserDetails