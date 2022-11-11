import { get } from "lodash";
import { Request, Response, NextFunction } from "express";

const requiresUser = (role: String[]) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = get(req, "user");

  if (!user) {
    return res.sendStatus(403);
  }

  if (role.length > 0 && role.includes(user['role'])) {
    return next();
  } else {
    return res.sendStatus(403);
  }
  

  return next();
};

export default requiresUser;