import { RESTDataSource } from 'apollo-datasource-rest';
import fetch from 'node-fetch';

export class BibleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.scripture.api.bible/v1/';
    this.apiKey = { 'api-key' : '9bea9ab8db7fd98f1f0ebb9cd98b8001' };
  }

  // put api-key in environment variable before going live
  willSendRequest(request) {
    request.headers.set('api-key', '9bea9ab8db7fd98f1f0ebb9cd98b8001');
  }

  async getAllBibles() {
    //const result = await this.get('bibles');
    const result = await fetch(this.baseURL + 'bibles', { headers: this.apiKey })
    .then(res => res.json())
    .then(json => json.data);

    console.log(result);
    return result;
  }

  async getABible(bibleId) {
    const result = await this.get(`bibles/${bibleId}`);
    //console.log(result);
    return result.data; 
  }

  async getAllBooks(bibleId) {
    const result = await this.get(`bibles/${bibleId}/books`);
    return result.data;
  }

  async getABook(bibleId, bookId) {
    const result = await this.get(`bibles/${bibleId}/books/${bookId}`);
    return result.data;
  }

};