import React from 'react';
import T from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ item }) => (
  <article className={styles.publication} id={item.id}>
    <h2 className={styles.publication.h2}>{item.title}</h2>
    <p className={styles.publication.p}>{item.text} </p>
  </article>
);

Publication.propTypes = {
  item: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      text: T.string.isRequired,
      title: T.string.isRequired,
    }),
  ).isRequired,
};

export default Publication;
