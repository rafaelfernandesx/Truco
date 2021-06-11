import { MB_DATA_API } from './config';

class MbDataApi {

  async getData(coin, method, extraParams = '') {
    const url = `${MB_DATA_API}/${coin}/${method}${(extraParams) ? '/' + extraParams : ''}`;
    const req = await fetch(url, {
      method: 'GET',
    });

    const json = await req.json();
    return json;
  }

}

export default MbDataApi;