import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Users from '../components/Users'
import UserDetails from '../components/UserDetails'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:name' element={<UserDetails />} />
        </Routes>
    )
}

export default Routing