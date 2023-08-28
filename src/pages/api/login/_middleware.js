// pages/api/login/_middleware.js
import session from 'express-session';

export default session({
  secret: '12354',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000, // 1 hour
  },
});
