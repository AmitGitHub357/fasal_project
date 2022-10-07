import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getMovies, getMovieListById } from '../redux/movies/moviesAction'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const MoviesList = () => {
    const { userId } = useParams()
    // console.log( userId )
    const [allList,setAllList] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [list, setList] = useState([])
    // const state = useSelector((state) => state)
    const [sList, setSList] = useState([])
    const state = useSelector((state) => state)
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } =  userSignIn;
    useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);
  useEffect(() => {
    dispatch(getMovies())
    setAllList(state.getMoviesList && state.getMoviesList.moviesList && state.getMoviesList.moviesList.data)
  },[]) 
//   console.log(state)
  useEffect(() => {    
        dispatch(getMovieListById(userId))
        setSList(state && state.getMovieByUserId && state.getMovieByUserId.moviesList && state.getMovieByUserId.moviesList)
    }, [])
    // console.log(sList)
    return (<>
        <div className='container'>
            <div className='row justify-content-center mt-2 pt-2'>
            <div className=''><button className='justify-content-center btn btn-warning mt-2' onClick={() => {
                navigate("/moviesAdd")
            }}>Create Movies</button></div>
                <div className="row row-cols-1 row-cols-md-2 g-4 ">
                    <div className="col">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <img src="data:image/jpeg;base64,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" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {sList && sList.list && sList.list.movieName}
                                </h5>
                                <p className="card-text">{sList && sList.list && sList.list.language}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">
                                    {sList && sList.list && sList.list.movieName}
                                </h5>
                                <hr></hr>
                                <p className="card-text">{sList && sList.list && sList.list.language}</p>
                                <hr></hr>
                                <p className="card-text">{sList && sList.list && sList.list.country}</p>
                                <hr></hr>
                                <p className="card-text">{sList && sList.list && sList.list.year}</p>
                                <hr></hr>
                                <p className="card-text">{sList && sList.list && sList.list.description}</p>
                                <hr></hr>
                                <pre className="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> {sList && sList.list && sList.list.ratings}</pre>
                                <hr></hr>
                                
                            </div>
                        </div>
                        <button className='btn btn-warning my-2' onClick={() => navigate("/allUserMovieslist")}>Go Back <i className = "bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>

<section className="" style={{marginTop : "100px"}}>
<div className='my-4 '>
    <h3>Watch Latest Movies</h3>
</div>
  <section className="">
    <div className="row">
        { console.log(state)}
      {state.getMoviesList && state.getMoviesList.moviesList && state.getMoviesList.moviesList.data.map((item) => {
       return (
        <><div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
            className="w-100"
          />
          <b className='card-title'>{item && item.movieName}</b><span><p>{item && item.country}</p></span>          
            <button className='btn btn-primary' onClick={() => navigate(`#`)}> View</button>
            <div className="mask" style={{backgroundColor: "white"}}></div>
        </div>
      </div>
        </>  
       )
      })}
      ynyheqskpolesprv
    </div>
  </section>

  <section className="" style={{marginTop : "200px"}}>
    <div
      className="modal fade mt-5"
      id="exampleModal1"
      tabIndex="-1"
      aria-labelledby="exampleModal1Label"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/A3PDXmYoF5U"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-center py-3">
            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade"
      id="exampleModal2"
      tabIndex="-1"
      aria-labelledby="exampleModal2Label"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/wTcNtgA6gHs"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <div className="text-center py-3">
            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade"
      id="exampleModal3"
      tabIndex="-1"
      aria-labelledby="exampleModal3Label"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <div className="text-center py-3">
            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
        </div>
    </>)
}
export default MoviesList