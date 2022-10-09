import Header from './components/Layout/Header';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Work from './components/pages/Work'
import Contact from './components/pages/Contact'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/work' element={<Work />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
