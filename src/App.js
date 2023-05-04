import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/home/Home';
import MovieList from './components/movielist/MovieList';
import Movie from './components/movieDetails/MovieDetails';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='movie/:id' element={<Movie/>} />
          <Route path='movies/:type' element={<MovieList/>} />
          <Route path='/*' element={<h1>erroer page</h1>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
