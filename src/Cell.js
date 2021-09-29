import React from 'react';

class Cell extends React.Component {

  constructor(props) {
    super();
    this.state = {
      color: props.value,
    }
  }

  render() {
    return <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}></div>
  }

  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }

}
export default Cell