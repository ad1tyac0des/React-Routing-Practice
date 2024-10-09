import Nav from './components/Nav'
import Routing from './utils/Routing'

const App = () => {
    return (
        <div className='container h-screen mx-auto pt-[.1px]'>
            <Nav />
            <Routing />
        </div>
    )
}

export default App