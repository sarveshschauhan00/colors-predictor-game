import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  disableBetting: boolean = false;
  constructor() { }
}
