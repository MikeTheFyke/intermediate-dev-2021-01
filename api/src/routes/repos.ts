import { Router, Request, Response } from 'express';
const path = require('path');

var internalUserRepos = require (path.resolve('data/repos.json'));

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  
  res.json(internalUserRepos);
});
