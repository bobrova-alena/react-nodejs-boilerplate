import { CountRequest, ICountResponse } from '../models';

export const fetchCount = (): Promise<void | ICountResponse> => {
  return fetch('api/data').then((res: Response) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json() as Promise<ICountResponse>;
  });
};

export const postData = (request: CountRequest): Promise<Response> => {
  return fetch('api/data', {
    method: 'POST',
    body: JSON.stringify(request),
  });
};
