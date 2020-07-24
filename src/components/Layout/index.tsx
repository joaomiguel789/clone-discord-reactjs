import React from 'react';
import { Grid } from './styles'
import ServerList from '../ServerList'


const Layout: React.FC = () => { // formato utilizando TypeScript
  return (
    <Grid>
      <ServerList />
    </Grid>
  )
};

export default Layout;