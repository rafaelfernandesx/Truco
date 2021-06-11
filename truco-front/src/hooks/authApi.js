import { BASE_API } from './config';

class AuthApi {

  async checkOnlineToken(JWT) {
    try {
      const req = await fetch(`${BASE_API}/auth/validate`, {
        method: 'POST',
        headers: {
          'Authorization': "Bearer " + JWT
        }
      });

      const json = await req.json();

      if (json.error === 0) {
        return true;
      }

      return false;
    } catch (e) {
      alert(e.message);
      return false;
    }
  }

  checkOfflineToken(JWT) {

      if (/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(JWT)) {
        return true;
      }

      return false;
  }

  async signIn(email, password) {

    const req = await fetch(`${BASE_API}/auth/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, device_id: '4fd4' })
    });

    const json = await req.json();

    return json;
  }

  async signOut(JWT) {

      const req = await fetch(`${BASE_API}/auth/signout`, {
        method: 'POST',
        headers: {
          'Authorization': "Bearer " + JWT
        }
      });

      const json = await req.json();

      return json;
    }

}

export default AuthApi;