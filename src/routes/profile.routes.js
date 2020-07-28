import express from 'express';
import tokenAuthentication from '../middlewares/tokenAuthentication';
import githubUserDataValidation from '../middlewares/githubData.validation.middleware';
import ProfileController from '../controllers/profile.controller';

const { userProfile } = ProfileController;
const routes = express.Router();

routes.put('/profile', [tokenAuthentication], userProfile);
export default routes;
