import { Injectable } from '@angular/core';
import Unit from './interfaces/unit';
@Injectable({
  providedIn: 'root',
})
export class UnitService {
  constructor() {}

  protected units: Unit[] = [
    { value: '0', viewValue: 'kg(s)' },
    { value: '1', viewValue: 'Pack' },
    { value: '2', viewValue: 'Piece' },
  ];

  getUnits(): Unit[] {
    return this.units;
  }
}
