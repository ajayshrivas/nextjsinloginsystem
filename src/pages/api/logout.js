// pages/api/logout.js
import withSession from '../../config/session';
async function handler(req, res) {
  req.session.destroy(); // Destroy the session to log the user out
  return res.status(200).end();
}
export default withSession(handler);