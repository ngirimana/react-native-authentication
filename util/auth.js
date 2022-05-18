import axios from 'axios';

const API_KEY = "AIzaSyAkydi3lvHoL5OyiqV0nO_tSSx6QvTP5WA";

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );
}
