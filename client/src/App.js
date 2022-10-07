import React from "react";
import "./App.css";
import Login from "./components/login";
import Edit from "./components/edit";
import View from "./components/view";
import Home from "./components/home";
import Sign_Up from "./components/sign_up";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import ProjectView from "./components/projectView";
import MoviesList from "./components/moviesList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import AddMovies from "./components/addMoviesList";
import GetMoviesListByUser from "./components/allUserMovieslist";

function App() {
  return (
    <div>
      <Provider store={ store }>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/edit" element={<Edit />} />
            <Route exact path="/sign_up" element={<Sign_Up />} />
            <Route exact path="/view" element={<View />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projectView" element={<ProjectView />} />
            <Route exact path="/moviesList/:userId" element={<MoviesList />}/>
            <Route exact path="/moviesAdd" element = { <AddMovies />} />
            <Route exact path="/allUserMovieslist/" element = { <GetMoviesListByUser /> } />
            <Route exact path="/" element={<Home />} />

            <Route />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
