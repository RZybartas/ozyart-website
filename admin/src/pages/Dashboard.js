import { Sidebar } from '../components/Sidebar';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div>
        <Sidebar className='dashboard__sidebar' />
      </div>
      <section className='dashboard__wrapper'>
        <h1 className='dashboard__title'>Dashboard</h1>
        <div className='dashboard__container'></div>
      </section>
    </div>
  );
};
