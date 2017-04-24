// Input
import React from 'react';
import { Input } from 'semantic-ui-react';

// import styles from './styles.scss';

export default ({ label, color, onChange }) =>
  <Input
    label={{
      content: label,
      color,
    }}
    onChange={onChange}
    fluid
  />;
