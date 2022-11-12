import { model, connect } from 'mongoose';
import config from 'config';
import { UserDocument, userSchema } from '../model/user.model';

// 3. Create a Model.
const User = model<UserDocument>('User', userSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect(config.get("dbUrl"));

  const user = new User({
    name: 'admin',
    email: 'admin@mail.com',
    password: '1234567',
    role: 'admin'
  });

  await user.save();
  process.exit(0);
}