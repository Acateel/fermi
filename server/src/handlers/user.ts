import { User } from "@prisma/client";
import prisma from "../db";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";

//exclude fields in user object
function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): Omit<User, Key> {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}

//exclude password in user object
export const excludePassword = (user: User) => {
  return exclude(user, ["password"]);
};

export const createNewUser = async (req, res, next) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);
  res.json({
    token,
    user: excludePassword(user),
  });
};

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValid = await comparePassword(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "password not walid" });
    return;
  }

  const token = createJWT(user);
  res.json({
    token,
    user: excludePassword(user),
  });
};
