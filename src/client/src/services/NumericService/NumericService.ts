import { INumericService, INumericServiceOptions } from './api';

export class NumericService implements INumericService {
  //private _number: number;
  private _onNumberChanged: (number: number) => void;

  //public get number(): number {
  //  return this._number;
  //}

  constructor(options: INumericServiceOptions) {
    //this._number = options.number;
    this._onNumberChanged = options.onNumberChanged;
  }

  public onNumberChanged(number: number): void {
    this._onNumberChanged(number);
  }

  //public setNumber(number: number) {
  //  this._number = number;
  //}
}
