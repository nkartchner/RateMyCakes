import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes() {
    return this._http.get("/api/Cakes");
  }

  getSingleCake(CakeId) {
    return this._http.get(`/api/${CakeId}`);
  }

  newCake(newCake) {
    return this._http.post('/api/new', newCake);
  }

  updateCake(CakeId, CakeData) {
    return this._http.put(`/api/update/${CakeId}`, CakeData);
  }

  deleteCake(CakeId) {
    return this._http.delete(`/api/remove/${CakeId}`);
  }


}
