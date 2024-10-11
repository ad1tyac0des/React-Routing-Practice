import Home from '../components/Home'
import About from '../components/About'
import Users from '../components/Users'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/users" element={<Users />}></Route>
        </Routes>
    )
}

export default Routing