import passwordGenenator from 'password-generator';

import Queue from '../lib/Queue';

export default {
  async store(req,res) {
    try {
      
      const {name,email} = req.body;
  
      const user = {
        name,
        email,
        password: passwordGenenator(15, false)
      };
  
      await Queue.add('RegistrationMail', {user})


      
      return res.json(user);
    } catch (error) {
      console.log(error)
      return res.send(error)
    }


  }
}