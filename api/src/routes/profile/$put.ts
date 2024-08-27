import type { Request, Response } from 'express';
import * as yup from 'yup';
import { profileDB } from '../../libs/db';
import { PROFILE_VERSION } from './const';
import profileSchema from './schema';

export default async function $put(req: Request, res: Response) {
  try {
    await profileSchema.validate(req.body, { abortEarly: false });
    await profileDB.update({ _id: `profile_${PROFILE_VERSION}` }, req.body, { upsert: true });
    return res.send();
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.errors,
      });
    }
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
}
