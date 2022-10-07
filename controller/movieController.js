const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Movies = require("../models/movieModel");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amit.metromindz@gmail.com',
    pass: 'mxwbimfknxfrloly'
  }
});

const createMovieList = asyncHandler(async (req, resp) => {
  try {
    const body = req.body
    // resp.send({
    //   file : req.files,
    //   body
    // })
    const newMovies = new Movies(body)
    const saveMovies = await newMovies.save()
    resp.send({
      message: 'Movies List Created successfully',
      success: true,
      status: 201
    })
  } catch (error) {
    resp.send({
      message: 'Something went wrong,please try again',
      success: false,
      error: error.message,
      status: 400
    })
  }
});

const getByUserId = asyncHandler(async (req, resp) => {
  try {
    const userId = req.params.id;
    const movieList = await Movies.findById(userId)
      .sort("-id")
      .populate("userId");
    // console.log(movieList)
    if (movieList) {
      resp.send({
        status: 200,
        success: "true",
        list: movieList,
      });
    }
  } catch (err) {
    resp.send({
      error: err.message,
    });
  }
});

const addedMoviesList = asyncHandler(async (req, resp) => {
  try {
    const list = await Movies.find()
    console.log(list)
    resp.send({
      data: list,
      success: true,
      status: 201
    })
  } catch (error) {
    resp.send({
      message: 'Something went wrong,please try again',
      success: false,
      error: error.message,
      status: 400
    })
  }
})

const removeById = asyncHandler(async (req, resp) => {
  try {
    const id = req.params.id;
    const movieDeleted = await Movies.findByIdAndDelete(id);
    // const movieDeleted = await Movies.deleteMany({ country : "British" })
    if (movieDeleted) {
      resp.send({
        status: 200,
        message: "Movies Deleted Successfully",
        success: true,
      });
    } else {
      resp.send({
        status: 400,
        message: "Movies Not Found",
        success: "false",
      });
    }
  } catch (err) {
    resp.send({
      error: err.message,
    });
  }
})

const getByTitle = asyncHandler(async (req, resp) => {
  try {
    const movieName = req.movieName
    // resp.send({
    //   movieName
    // })
    const searchList = await Movies.find({ movieName : movieName })
    resp.send({
      searchList,
      success: true,
      status: 200,
    });
  } catch (error) {
    resp.send({
      message: "Something went wrong,please try again",
      success: false,
      error: error.message,
      status: 400,
    });
  } 
})

const sendEmail = asyncHandler(async(req,res) => {
    try{
      const { email } = req.body
      
      var mailOptions = {
        from: 'amit.metromindz@gmail.com',
        to: email,
        subject: 'Demo Purpose',
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 

      //     let email = await transporter.sendMail(sendLink);
          res.json({
            message: `A mail has been sent to ${email}. Please follow the instructions.`,
            success: true,
            status: 200,
          });
    }catch(err) {
      res.send({
        error: error.message,
        status: 400,
        success: false,
      });
    }
})

module.exports = {
  createMovieList,
  addedMoviesList,
  getByUserId
  , removeById,
  getByTitle,
  sendEmail
}