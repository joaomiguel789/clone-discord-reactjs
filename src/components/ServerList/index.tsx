import React from 'react';

import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
  return(
    <Container>
      <ServerButton isHome/>

      <Separator />

      <ServerButton /> 
      <ServerButton hasNotifications/>
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton asNotifications/>
      <ServerButton />
      <ServerButton mentions={3}/>
      <ServerButton />
    </Container>
  )
};


export default ServerList;