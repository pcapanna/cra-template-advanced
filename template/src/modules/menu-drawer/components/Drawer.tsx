import React from 'react';
import {useCloseDrawer, useIsOpened} from '../hooks';
import {Drawer} from '@material-ui/core';

const CustomDrawer = ({
  children,
  DrawerContent,
}: {
  children: any;
  DrawerContent: any;
}) => {
  const isOpened = useIsOpened();
  const closeDrawer = useCloseDrawer();

  return (
    <Drawer
      open={isOpened}
      onClose={() => closeDrawer()}>
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
