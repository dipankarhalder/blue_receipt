import express from "express";

// all important methods and helpers
import { getUserByEmail, createUser } from "../db/users";
import { random, authentication } from "../helpers";

// user login/signin
export const login = async (
  req: express.Request, 
  res: express.Response
) => {
  try{
    // destructure requested body from user 
    const { email, password } = req.body;

    // validate all fields empty or not
    if (!email || !password) {
      return res.status(400).json({ 
        msg: "email, password should not be blank." 
      });
    }

    // validate requested user exist or not
    const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
    if (!user) {
      return res.status(400).json({ 
        msg: `${email} is not associated with any account, Please enter correct email.` 
      });
    }

    // validate credintial
    const expectedHash = authentication(user.authentication.salt, password);
    if (user.authentication.password !== expectedHash) {
      return res.status(400).json({ 
        msg: "Sorry! You have entered wrong password. Please try again." 
      });
    }

    // check session token
    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());

    await user.save();
    res.cookie("DIPANKAR-REST-API", user.authentication.sessionToken, { domain: 'localhost', path: "/" });

    return res.status(200).json(user).end();
  } catch (error) {
    return res.status(400).json({ 
      msg: `Something went wrong, please try again later` 
    });
  }
}

// new user registration/signup
export const register = async (
  req: express.Request, 
  res: express.Response
) => {
  try {
    // destructure requested body from user 
    const { username, email, password } = req.body;

    // validate all fields empty or not
    if (!username || !email || !password) {
      return res.status(400).json({ 
        msg: "username, email, password should not be blank." 
      });
    }

    // validate requested user exist or not
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ 
        msg: `${email} already associated with another user.` 
      });
    }

    // create new user
    const salt = random();
    const newUser = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(newUser).end();
  } catch (error) {
    return res.status(400).json({ 
      msg: `Something went wrong, please try again later` 
    });
  }
}