// pages/api/login.js
import connectDB from '../../utils/db';
import User from '../../models/user';
import bcrypt from 'bcryptjs';
import withSession from '../../config/session';
const handler = withSession(async (req, res) => {
    if (req.method === 'POST') {

      await connectDB(); // Ensure database connection
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
       }
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Set user data in the session
        req.session.set('user', user);
        await req.session.save();
  
        return res.status(200).json({ message: 'Login successful', redirectTo: '/dashboard' });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

    }
    return res.status(405).end();
});

export default handler;
// pages/api/login.js
