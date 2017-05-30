import React from 'react';

class Sizzler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLimit : 56,
      img: 1,
      changeBGInterval: undefined
    }
    this.sizIMGUpdate = this.sizIMGUpdate.bind(this);
  }

  componentDidMount() {
    this.sizIMGUpdate();
    this.setState({changeBGInterval: setInterval(() => {
      this.setState((prevState) => {
        if (prevState.img + 1 <= prevState.imgLimit) {
          prevState.img += 1;
        }
        else prevState.img = 1;
        return prevState;
      });
      this.sizIMGUpdate();
    }, 10000)}) 
  }

  componentWillUnmount() {
    clearInterval(this.state.changeBGInterval);
  }

  sizIMGUpdate() {
    this.sizBG.style.maxHeight = '600px';
    this.sizBG.style.opacity = '0.80';
    this.sizBG.style.zIndex = '-1';
    this.sizBG.style.position = 'absolute';
    this.sizBG.style.top = '0';
    this.sizBG.style.left = '0';
    this.sizBG.style.right = '0';
    this.sizBG.style.bottom = '0';
    this.sizBG.style.background = `center no-repeat url("./img/sizzler/${this.state.img}.jpg")`;
    // this.sizBG.style.backgroundAttachment = 'fixed';
    this.sizBG.style.backgroundSize = 'cover';
    this.sizBG.style.backgroundPosition = '50% 10%';
    this.sizBG.style.transition = 'background-image ease-in-out 0.5s'
  }

  render() {
    return (
      <div>
        <div ref={(div) => {this.sizBG = div}} />
      </div>
    );
  }
}

export default Sizzler;