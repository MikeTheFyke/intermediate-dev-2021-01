import { Router, Request, Response } from 'express';
const path = require('path');
const request = require('request');

export const repos = Router();

var internalUserRepos = require (path.resolve('data/repos.json'));

var finalUserRepos = [];

internalUserRepos.forEach (function(a) {
  if(a.fork === false){
    console.log("success")
    finalUserRepos.push(a)
  }
  console.log(finalUserRepos)
});


// const userRequest = (accessToken) => request ('https://api.github.com/users/silverorange/repos',(error, response, body) => {
//     if (error){
//       console.log("Error has occured")
//     } else {
//       var externalUserRepos = body;
//       console.log(externalUserRepos);
//     }
// });

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  // userRequest();

  res.json(finalUserRepos);
})
