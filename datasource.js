import { RESTDataSource } from 'apollo-datasource-rest';

export class BibleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.scripture.api.bible/v1/';
  }

  // put api-key in environment variable before going live
  willSendRequest(request) {
    request.headers.set('api-key', '9bea9ab8db7fd98f1f0ebb9cd98b8001');
  }

  async getAllBibles() {
    const result = await this.get('bibles');
    //console.log(result);
    return result.data;
  }

  async getABible(bibleId) {
    const result = await this.get(`bibles/${bibleId}`);
    //console.log(result);
    return result.data; 
  }
};