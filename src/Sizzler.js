import React from 'react';

class Sizzler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizWidth : 0,
      sizHeight : 0,
      imgLimit : 61,
      img: 1
    }
    this.handleResize = this.handleResize.bind(this);
    this.sizIMGUpdate = this.sizIMGUpdate.bind(this);
  }

  componentDidMount() {
    this.sizIMGUpdate();
    window.addEventListener('resize', this.handleResize);
    window.setInterval(() => {
      this.setState((prevState) => {
        if (prevState.img + 1 <= prevState.imgLimit) {
          prevState.img += 1;
        }
        else prevState.img = 1;
        return prevState;
      });
      this.sizIMGUpdate();
    }, 5000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  sizIMGUpdate() {
    this.sizBG.style.maxHeight = '1080px';
    this.sizBG.style.opacity = '0.45';
    this.sizBG.style.zIndex = '-1';
    this.sizBG.style.position = 'absolute';
    this.sizBG.style.top = '0';
    this.sizBG.style.left = '0';
    this.sizBG.style.right = '0';
    this.sizBG.style.bottom = '0';
    this.sizBG.style.background = `center no-repeat url("./img/${this.state.img}.JPG")`;
    this.sizBG.style.backgroundAttachment = 'fixed';
    this.sizBG.style.backgroundSize = 'cover';
    this.sizBG.style.backgroundPosition = '50% 30%'
    this.sizBG.style.transition = 'background-image ease-in-out 0.5s'
  }

  handleResize(e) {
    const ratio = this.sizBG.naturalHeight / this.sizBG.naturalWidth;
    let sizHeight = window.innerWidth * ratio;
    let sizWidth = window.innerWidth;

    if (sizHeight < 1080) {
      sizWidth = 1080/ratio;
      sizHeight = 1080;
    }
    if (window.innerWidth < this.sizBG.naturalWidth) {
      sizWidth = 1080/ratio;
      sizHeight = 1080;
    }
    this.setState({sizWidth : sizWidth, sizHeight: sizHeight});
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