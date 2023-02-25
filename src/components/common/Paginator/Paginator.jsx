import React, { useEffect, useState } from 'react';
import s from './Paginator.module.css'
import cn from 'classnames'

const Paginator = (props, { portionSize = 10 }) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  useEffect(() => setPortionNumber(Math.ceil(props.currentPage / portionSize)), [props.currentPage]);

  return (
    <div className={s.paginator}>
      {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
      {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <button className={cn({ [s.selectedPage]: props.currentPage === p }, s.pageNumber)} key={p} onClick={(e) => { props.onPageChanged(p) }}>
              {p}
            </button>
          )
        })}

      {portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
  );
};

export default Paginator;