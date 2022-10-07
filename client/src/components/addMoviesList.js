import React, { useState, useEffect } from "react";
import { addMovies } from "../redux/movies/moviesAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddMovies = () => {
    const navigate = useNavigate()
    const state = useSelector(state => state)
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const [movieName, setMovieName] = useState('')
    const [description, setDescription] = useState('')
    const [year, setYear] = useState('')
    const [country, setCountry] = useState('')
    const [language, setLanguage] = useState('')
    const [userId, setUserId] = useState('')
    const [images, setImages] = useState('')

    const dispatch = useDispatch()
//     const userSignIn = useSelector((state) => state.userSignIn);
//   const { userInfo } =  userSignIn;
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);
    const addHandler = (e) => {
        e.preventDefault()
        // alert()
        // console.log("hello")
        // console.log({
        //     description: data.description,
        //     year : data.year,
        //     movieName: data.movieName,
        //     language: data.language,
        //     country: data.country,
        //     userId: userInfo._id
        // })
        // console.log(data)
        dispatch(addMovies({
            description: description,
            year: year,
            movieName: movieName,
            language: language,
            country: country,
            userId: userInfo._id,
            images: images
        }))
        if (state.addMoviesList)
            alert("Movies Added SuccessFully")
    }
    // useEffect(() => {
    //     console.log(state)
    // },[])
    console.log(state)
    return (<>
        <div className="container mt-5" >
            {/* <!-- <div id="header"></div> --> */}
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-6">
                    <div>
                        <h3 className="text-center">Add Movie Details</h3>
                        <button className="btn btn-warning" onClick={() => navigate("/allUserMovieslist")}>View Your Movies List</button>
                    </div>
                    <div className="form-group mt-3 col-md-4">
                        <label>Name</label>
                        <input
                            onChange={e => setMovieName(e.target.value)}
                            required
                            type="text"
                            className="form-control mt-3"
                            id=""
                            placeholder="Enter Movie Name..."
                        />
                    </div>
                    <div className="form-group mt-3 col-md-4">
                        <label>Upload Image</label>
                        <input
                            onChange={e => setImages(e.target.value)}
                            required
                            type="file"
                            className="form-control mt-3"
                            id=""
                        // placeholder="Enter Movie Name..."
                        />
                    </div>
                    <div className="form-group mt-3 col-md-4">
                        <label>Description</label>
                        <input
                            onChange={e => setDescription(e.target.value)}
                            required
                            type="text"
                            className="form-control mt-3"
                            id=""
                            placeholder="Enter About Movie...."
                        />
                    </div>
                    <div className="form-group mt-3 col-md-4">
                        <label>Year</label>
                        <input
                            onChange={e => setYear(e.target.value)}
                            required
                            type="number"

                            className="form-control mt-3 col-md-4"
                            id=""
                            placeholder="Enter Year..."
                        />
                    </div>
                    <div className="form-group mt-3 col-md-4">
                        <label>Country</label>
                        <input required type="text" placeholder="enter country..." className="form-control"
                            onChange={e => setCountry(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3 col-md-4">
                        <label>Language</label>
                        <input required type="text" className="form-control" placeholder="enter language..."
                            onChange={e => setLanguage(e.target.value)}
                        // onChange={e => setData({ language : e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mr-3" onClick={(e) => addHandler(e)}>Submit</button>
                </div>
                <div className="col-md-6 col-sm-6 mt-5">
                    <img src="https://www.acv.app/static/media/RemoteTeamAnimate.9bc87be4.svg" />
                </div>
            </div>
        </div>
    </>)
}

export default AddMovies