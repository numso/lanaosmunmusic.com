/* @flow */

import React, {Component} from 'react'

import styles from './contact.styl'

export default class Contact extends Component {

  displayName: 'Contact';

  render(): ReactElement {
    return (
      <div>
        <h3>Contact Me</h3>
        <p className={styles.body}>
          The best way to get ahold of me is
          through <a target="_blank" href="mailto:lana@osmun.net">email</a>.
          Please let me know your name and why you're contacting me. Also, make
          sure to mention "LanaOsmunMusic" in the subject of the email. Thanks!
        </p>
      </div>
    )
  }

}
