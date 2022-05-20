import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataGrid } from '@mui/x-data-grid';

import { Sidebar } from '../components/Sidebar';
import { getProducts } from '../features/products/productsSlice';

const columns = [
  { field: '_id', headerName: 'ID', width: 210 },
  { field: 'title', headerName: 'Title', width: 180 },
  {
    field: 'image_url',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => {
      return (
        <img
          className='cell-img'
          src={params.row.image_url}
          alt={params.row.title}
        />
      );
    },
  },
  {
    field: 'createdAt',
    headerName: 'Created',
    type: 'date',
    width: 110,
  },
  {
    field: 'likesCount',
    headerName: 'Likes',
    width: 60,
  },
  {
    field: 'new',
    headerName: 'New',
    width: 60,
  },
  {
    field: 'size',
    headerName: 'Size',
    width: 200,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 200,
  },
];

export const Products = () => {
  const [pageSize, setPageSize] = useState(16);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className='products'>
      <div className='products__sidebar'>
        <Sidebar />
      </div>
      <section className='products__wrapper'>
        <h1 className='products__title'>Products</h1>
        <div className='table'>
          {products ? (
            <DataGrid
              getRowId={(row) => row._id}
              rows={products}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[16, 32, 48]}
            />
          ) : (
            <h2 className='users__message'>Sorry, no products</h2>
          )}
        </div>
      </section>
    </div>
  );
};
