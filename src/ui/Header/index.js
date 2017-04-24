// Header
import React from 'react';
import { Header } from 'semantic-ui-react';

import styles from './styles.scss';

export default ({ title }) =>
  <div className={styles.header}>
    <Header as="h1">
      {title}
    </Header>
  </div>;
