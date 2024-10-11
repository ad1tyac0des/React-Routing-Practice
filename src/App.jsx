import Nav from "./components/Nav";
import Routing from "./utils/Routing";

const App = () => {
    return (
        <div className="w-full h-screen bg-zinc-200">
            <Nav />
            <Routing />
        </div>
    )
}

export default App