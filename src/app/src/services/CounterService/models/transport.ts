export interface ICountResponse {
  count: number;
}

export class CountRequest {
  constructor(public count: number) {}
}
