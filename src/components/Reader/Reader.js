import React, { Component } from 'react';
import T from 'prop-types';
import styles from './Reader.module.css';

import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf().isRequired,
    location: T.shape().isRequired,
    history: T.shape().isRequired,
  };

  componentDidMount() {
    const { items, location, history } = this.props;
    const item = new URLSearchParams(location.search).get('item');

    if (Number(item) && Number.isInteger(Number(item))) {
      if (Number(item) > items.length) {
        history.push({
          ...location,
          search: `item=${items.length}`,
        });

        return;
      }

      if (Number(item) < 1) {
        history.push({
          ...location,
          search: 'item=1',
        });

        return;
      }

      history.push({
        ...location,
        search: `item=${item}`,
      });

      return;
    }

    history.push({
      ...location,
      search: 'item=1',
    });
  }

  componentDidUpdate() {
    const { location, history } = this.props;
    const item = new URLSearchParams(location.search).get('item');
    if (Number(item) < 1) {
      history.push({
        ...location,
        search: 'item=1',
      });
    }
  }

  nextPage = () => {
    const { items, location, history } = this.props;

    const item = new URLSearchParams(location.search).get('item');

    if (Number(item) >= items.length) return;

    history.push({
      ...location,
      search: `item=${Number(item) + 1}`,
    });
  };

  prevPage = () => {
    const { location, history } = this.props;

    const item = new URLSearchParams(location.search).get('item');

    if (Number(item) < 1) return;

    history.push({
      ...location,
      search: `item=${Number(item) - 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const item = new URLSearchParams(location.search).get('item');

    return (
      <div className={styles.reader}>
        <Controls onNextPage={this.nextPage} onPrevPage={this.prevPage} />

        <Counter
          totalNumberOfPages={items.length}
          numberOfCurrentPage={Number(item)}
        />

        {item > 0 && item <= items.length && Number.isInteger(Number(item)) && (
          <Publication item={items[Number(item) - 1]} />
        )}
      </div>
    );
  }
}
