import React from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onNextPage,
  onPrevPage,
  nextPageDisabled,
  prevPageDisabled,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={onPrevPage}
      disabled={prevPageDisabled}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={onNextPage}
      disabled={nextPageDisabled}
    >
      Вперед
    </button>
  </section>
);
Controls.propTypes = {
  onPrevPage: T.func.isRequired,
  onNextPage: T.func.isRequired,
  nextPageDisabled: T.bool.isRequired,
  prevPageDisabled: T.bool.isRequired,
};

export default Controls;
