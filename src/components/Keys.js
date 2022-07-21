import React from 'react';
import PropTypes from 'prop-types';

class Keys extends React.PureComponent {
  render() {
    const { val, handleEvent, styles } = this.props;
    return (
      <button onClick={handleEvent} className={styles} type="button">{val}</button>
    );
  }
}

Keys.propTypes = {
  val: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
  styles: PropTypes.string.isRequired,
};

export default Keys;
