import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from '../components/Sidebar';

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
  const { products } = useSelector((state) => state.products);
  const [pageSize, setPageSize] = useState(10);

  return (
    <div className='products'>
      <div className='products__sidebar'>
        <Sidebar />
      </div>
      <section className='products__wrapper'>
        <h1 className='products__title'>Products</h1>
        <div className='table'>
          <DataGrid
            getRowId={(row) => row._id}
            rows={products}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 25, 50]}
          />
        </div>
      </section>
    </div>
  );
};
