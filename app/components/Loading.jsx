import PropTypes from 'prop-types'
import React, {Component} from 'react'

const styles = {
  content: {
    textAlign: 'center',
    fontSize: 30
  }
}

class Loading extends Component {
  constructor(props) {
    super(props);
    this.originText = props.text;
    this.state = {
      text: props.text
    }
  }

  componentDidMount() {
    const stoper = `${this.originText}...`;
    this.intervalId = window.setInterval(() => {
      if (this.state.text === stoper) {
        this.setState(() => {
          return {text: this.originText}
        });
      } else {
        this.setState(pre => {
          return {
            text: pre.text + '.'
          };
        });
      }
    }, this.props.speed);
  }

  componentWillUnmount () {
    window.clearInterval(this.intervalId);
  }
  

  render() {
    return (
      <div style={styles.content}>
        {this.state.text}
      </div>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading
