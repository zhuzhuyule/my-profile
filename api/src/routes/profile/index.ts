import middleware from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';
import $get from './$get';
import $put from './$put';

const profileRouter = Router();

profileRouter.get('/', $get);
profileRouter.put('/', middleware.user(), $put);

export default profileRouter;
