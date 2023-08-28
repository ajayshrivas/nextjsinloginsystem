// pages/api/session.js
import withSession from '../../config/session';
async function handler(req, res) {
  const user = req.session.get('user'); // Fetch the user data from the session

  return res.status(200).json({ user });
} 
export default withSession(handler);
