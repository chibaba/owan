import React from 'react';
import Layout from '../../Commons/Layout';
import Drawer from '../../Commons/Drawer';
import { useAppContext } from '../../Context/AppContext';

function Home() {
  const { showDrawer, handleDrawerState } = useAppContext();

  function toggleDrawer() {
    handleDrawerState();
  }

  return (
    <>
      {showDrawer ? <Drawer drawerPosition="right"></Drawer> : null}
      <Layout>
        <button onClick={toggleDrawer}>Show drawer</button>
      </Layout>
    </>
  );
}

export default Home;
