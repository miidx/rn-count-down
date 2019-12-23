import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

const styles = {
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
};

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minute: '--',
      second: '--',
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.interval = setInterval(this.onInterval, 1000);
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
    clearInterval(this.interval);
  }

  onInterval = () => {
    if (this.props.endTime) {
      const now = moment(new Date());
      const endDate = moment(this.props.endTime);

      let minute = endDate.diff(now, 'minutes');
      minute = (`${minute}`).length === 1 ? `0${minute}` : minute;
      let second = endDate.diff(now, 'seconds') % 60;
      second = (`${second}`).length === 1 ? `0${second}` : second;

      this.setState({ minute, second });

      if (endDate.diff(now, 'seconds') <= 0) {
        clearInterval(this.interval);
        this.props.onTimeIsUp();
      }
    }
  }

  renderLabel = () => {
    const { textStyle, label } = this.props;
    if (label) {
      return (
        <Text style={textStyle}>
          {`${label} ${this.state.minute}:${this.state.second}`}
        </Text>
      )
    }
    return (
      <Text style={textStyle}>
        {`${this.state.minute}:${this.state.second}`}
      </Text>
    )
  }

  render() {
    const { containerStyle } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        {this.renderLabel()}
      </View>
    );
  }
}

const StyleShape = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

Countdown.propTypes = {
  endTime: PropTypes.string.isRequired,
  label: PropTypes.string,
  textStyle: StyleShape,
  containerStyle: StyleShape,
  onTimeIsUp: PropTypes.func.isRequired,
};

Countdown.defaultProps = {
  textStyle: {},
  containerStyle: {},
  label: '',
};
