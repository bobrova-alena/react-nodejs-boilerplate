import React from 'react';
import { IRandomService } from 'src/services';

type NumericPanelProps = {
  service: IRandomService;
  number: number;
};

export function NumericPanel(props: NumericPanelProps): JSX.Element {
  return (
    <>
      <div>{props.number}</div>
      <button onClick={(): void => props.service.update()} />
    </>
  );
}
