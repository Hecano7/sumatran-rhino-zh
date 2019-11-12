import React from 'react';

export default class RhinoSays extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const statements = ['Hi my name is Delilah.','Hi my name is Harapan.','Hi my name is Ratu.','Hi my name is Andatu.','Hi my name is Bina.','Hi my name is Andalas.','Hi my name is Rosa.']
    return (
        <div className="hello">
        <img className="yo" src={require(".././image/textBubble.png")}  />
        <div className="centered">{statements[this.props.counter]}</div>
        </div>
    );
  }
}
