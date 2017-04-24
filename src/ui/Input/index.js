// Input
import React from 'react';
import { Input } from 'semantic-ui-react';

// import styles from './styles.scss';

export default ({ label, color }) =>
  <Input
    label={{
      content: label,
      color,
    }}
    fluid
  />;
