import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from '../components/Sidebar';

const columns = [
  { field: '_id', headerName: 'ID', width: 210 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  {
    field: 'createdAt',
    headerName: 'Created',
    type: 'date',
    width: 210,
  },
  {
    field: 'isAdmin',
    headerName: 'Role',
    width: 100,
    editable: true,
  },
  {
    field: 'updatedAt',
    headerName: 'Updated',
    width: 120,
  },
];

export const Users = () => {
  const { users } = useSelector((state) => state.users);
  const [pageSize, setPageSize] = useState(10);

  return (
    <div className='users'>
      <div className='users__sidebar'>
        <Sidebar />
      </div>
      <section className='users__wrapper'>
        <h1 className='users__title'>Users</h1>
        <div className='users__table'>
          {users ? (
            <DataGrid
              getRowId={(row) => row._id}
              rows={users}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[10, 25, 50]}
            />
          ) : (
            <h2 className='users__message'>Sorry, you don't have permision</h2>
          )}
        </div>
      </section>
    </div>
  );
};
