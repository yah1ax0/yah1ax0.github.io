import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import BlogPost from './pages/BlogPost'

function App() {

    return (
        <>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/blog" element={<Blog />} />

                <Route path="/blog/:slug" element={<BlogPost />} />

                <Route path="/projects" element={<Projects />} />

            </Routes>
        </>
    )
}

export default App