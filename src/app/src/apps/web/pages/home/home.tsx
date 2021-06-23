import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NumericService, NumberRequest, GET_NUMBER, POST_NUMBER } from 'src/services';
import { selectNumber } from '../../store';
import { RandomNumber } from 'src/components';

export default function HomePage(): JSX.Element {
  const dispatch = useDispatch();
  const number = useSelector(selectNumber);

  useEffect(() => {
    dispatch(GET_NUMBER());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memoizedService = useMemo(
    () =>
      new NumericService({
        //number: number,
        onNumberChanged: (number: number): void => {
          dispatch(POST_NUMBER(new NumberRequest(number)));
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  //useEffect(() => {
  //  memoizedService.setNumber(number);
  //});

  return (
    <>
      <div>Home</div>
      <RandomNumber service={memoizedService} number={number} />
    </>
  );
}
