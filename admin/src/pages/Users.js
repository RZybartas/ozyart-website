import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from '../components/Sidebar';
import { getAllUsers } from '../features/users/usersSlice';

const columns = [
  { field: '_id', headerName: 'ID', width: 250 },
  { field: 'username', headerName: 'Username', width: 250 },
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
    width: 220,
  },
];

export const Users = () => {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const [pageSize, setPageSize] = useState(10);
  const dispatch = useDispatch();
  const token = user?.token;

  useEffect(() => {
    dispatch(getAllUsers(token));
  }, [dispatch, token]);

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
            <h2 className='users__message'>Sorry, you don't have permission</h2>
          )}
        </div>
      </section>
    </div>
  );
};
