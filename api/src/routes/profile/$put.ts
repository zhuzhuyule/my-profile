import type { Request, Response } from 'express';
// import isArray from 'lodash/isArray';
import { authService } from '../../libs/auth';
import { profileDB } from '../../libs/db';
import { PROFILE_VERSION } from './const';

export default async function $put(req: Request, res: Response) {
  // if (!isArray(req.body.todoList)) {
  //   throw new Error('TodoList must be an array');
  // }

  const { user } = await authService.getUser(req.user?.did as string);
  if (!user?.didSpace?.endpoint) {
    return res.status(404).send('DID Spaces endpoint does not exist. Log in again to complete the authorization');
  }

  await profileDB.update({ _id: `profile_${PROFILE_VERSION}` }, req.body, { upsert: true });

  return res.send();
}
