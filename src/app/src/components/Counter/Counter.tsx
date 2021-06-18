import React from 'react';

type CounterProps = {
  count: number;
  onCountChanged: (count: number) => void;
};

export function Counter(props: CounterProps): JSX.Element {
  return <div>${props.count}</div>;
}
