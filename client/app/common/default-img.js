/* @flow */

import React, {Component, PropTypes} from 'react'

type Props = {
  src: string;
};

export default class DefaultImg extends Component {

  displayName: 'DefaultImg';

  props: Props;

  constructor(props: Props) {
    super(props)
    let img = new Image()
    img.onload = () => this.setState({exists: true})
    img.src = props.src
    this.state = {}
  }

  render(): ReactElement {
    var src = this.state.exists ? this.props.src : 'img/songs/default.png'
    return <img src={src}/>
  }

}

DefaultImg.propTypes = {
  src: PropTypes.string.isRequired
}
