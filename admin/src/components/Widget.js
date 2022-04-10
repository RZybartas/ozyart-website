import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Widget = ({ name, count, links, icons }) => {
  return (
    <div className='widget'>
      <div className='widget__left'>
        <span className='widget__title'>{name}</span>
        <span className='widget__counter'>{count}</span>
        <Link to={{ pathname: links }}>See all {name}</Link>
      </div>
      <div className='widget__right'>
        <div className='widget__arrow'>
          <KeyboardArrowUpIcon />
          10%
        </div>
        <div className='widget__icon'>{icons}</div>
      </div>
    </div>
  );
};
