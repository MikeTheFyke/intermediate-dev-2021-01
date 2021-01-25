import { Router, Request, Response } from 'express';
// import { config } from './config';
const path = require('path');
const request = require('request');

export const repos = Router();

var finalUserRepos = [];
var internalUserRepos = require (path.resolve('data/repos.json'));
var externalUserRepos = require (path.resolve('data/reposExternal.json'));

var mergedRepos = internalUserRepos.concat(externalUserRepos);

mergedRepos.forEach (function(a) {
  if(a.fork === false){
    finalUserRepos.push(a)
  }
});

// const userRequest = (accessToken) => request ('https://api.github.com/users/silverorange/repos', (error, response, body) => {  
//   if(!error){
//         var externalUserRepos = body;
//         console.log(externalUserRepos);
//         headers: { 'user-agent': 'node.js' }
//   } else {
//     console.log("Error detected")
//   }
// });



repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  // userRequest();

  res.json(finalUserRepos);
})
