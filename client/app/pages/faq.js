/* @flow */

import {map} from 'lodash'
import React, {Component} from 'react'

import faqs from '../data/faqs'
import styles from './faq.styl'

export default class Faq extends Component {

  displayName: 'Faq';

  render(): ReactElement {
    return (
      <div className={styles.wrapper}>
        <h3>Frequently Asked Questions</h3>
        <p>
          Well, I don't really have that many questions asked of me, but here
          are a few :)
        </p>
        <table>
          {map(faqs, faq => (
            <tr>
              <td>{faq.question}</td>
              <td>{faq.answer}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }

}
