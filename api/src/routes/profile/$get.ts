import type { Request, Response } from 'express';
import { profileDB } from '../../libs/db';
import { PROFILE_VERSION, DEFAULT_PROFILE } from './const';

export default async function $get(_req: Request, res: Response) {
  try {
    const data = await profileDB.findOne({ _id: `profile_${PROFILE_VERSION}` });
    return res.json(
      data || {
        _id: `profile_${PROFILE_VERSION}`,
        ...DEFAULT_PROFILE,
      },
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
