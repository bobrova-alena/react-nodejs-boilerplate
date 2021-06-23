export interface INumericServiceOptions {
  //number: number;
  onNumberChanged: (number: number) => void;
}

export type INumericService = {
  //number: number;
  //setNumber: (count: number) => void;
  onNumberChanged: (count: number) => void;
};
