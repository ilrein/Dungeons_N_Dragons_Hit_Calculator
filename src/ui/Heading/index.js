// Header
import React from 'react';
import { Header } from 'semantic-ui-react';

import styles from './styles.scss';

export default ({ title, as }) =>
  <div className={styles.header}>
    <Header as={as} className={styles['header-content']}>
      {title}
    </Header>
  </div>;
