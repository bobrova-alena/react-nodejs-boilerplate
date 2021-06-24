import React from 'react';
import { INumericService } from 'src/services';

type NumericProps = {
  service: INumericService;
  number: number;
};

export function RandomNumber(props: NumericProps): JSX.Element {
  const random = () => Math.floor(Math.random() * 100);
  return (
    <>
      <div>{props.number}</div>
      <button onClick={(): void => props.service.onNumberChanged(random())} />
    </>
  );
}
