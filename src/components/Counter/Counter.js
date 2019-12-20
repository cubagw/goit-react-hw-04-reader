import React from 'react';
import T from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ totalNumberOfPages, numberOfCurrentPage }) => (
  <p className={styles.counter}>
    {numberOfCurrentPage}/{totalNumberOfPages}
  </p>
);

Counter.propTypes = {
  totalNumberOfPages: T.number.isRequired,
  numberOfCurrentPage: T.number.isRequired,
};

export default Counter;
