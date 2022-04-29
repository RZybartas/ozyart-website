import { useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/productsSlice';

export const AppPagination = ({ page }) => {
  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((state) => state.products);

  console.log(page);
  useEffect(() => {
    if (page) dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Pagination
      page={Number(page) || 1}
      count={numberOfPages}
      variant='outlined'
      shape='rounded'
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/products?page=${item.page}`}
          {...item}
        />
      )}
    />
  );
};
