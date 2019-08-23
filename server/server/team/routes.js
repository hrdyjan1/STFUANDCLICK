import { Router } from 'express';
import cors from 'cors';
import * as TeamController from './controller';

const routes = new Router();

routes.post('/team', cors(), TeamController.createTeamOrClick);
routes.get('/teams', cors(), TeamController.getAllTeam);

export default routes;
