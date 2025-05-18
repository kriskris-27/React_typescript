import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contents from './pages/Contents'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'




function App() {
    
    return (
        <BrowserRouter>
        <Navbar/>
        
        <Routes >
            <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/contents' element={<Contents/>}/>
            </Route>
    </Routes>
        
        </BrowserRouter>
    )
}

export default App
