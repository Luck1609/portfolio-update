import session, { SessionOptions } from "express-session";

import store from "connect-session-sequelize";
import { isLive } from "./vars";

const SequelizeStore = store(session.Store);

import DB from "../../../models";

// initalize sequelize with session store
const mySequelizeStore = new SequelizeStore({
  db: DB,
  table: "Session",
  tableName: "sessions",
});

// SessionOptions
const sessionOptions: SessionOptions = {
  secret: "QWxsR09vZFRoSU5nc011c1RDb21lMkFuRU5E",
  resave: false,
  saveUninitialized: true,
  store: mySequelizeStore,
  proxy: isLive,
  cookie: {
    secure: isLive,
    httpOnly: isLive,
    sameSite: isLive ? "none" : true,
  },
};

export default sessionOptions;