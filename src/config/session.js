// config/session.js

import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
  return withIronSession(handler, {
    password: 'aVeryStrongAndSecurePasswordWithAtLeast32Characters',
    cookieName: 'ajaysingh',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
}
