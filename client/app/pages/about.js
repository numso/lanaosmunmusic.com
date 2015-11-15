/* @flow */

import {contains} from 'lodash'
import React, {Component} from 'react'

import actions from '../data/about'
import styles from './about.styl'

function getUniqueAction(curActions) {
  var rand = Math.floor(Math.random() * actions.length)
  var newAction = actions[rand]
  return contains(curActions, newAction)
    ? getUniqueAction()
    : newAction
}

export default class About extends Component {

  displayName: 'About';

  render(): ReactElement {
    const curActions = []
    curActions.push(getUniqueAction(curActions))
    curActions.push(getUniqueAction(curActions))
    curActions.push(getUniqueAction(curActions))

    return (
      <div className={styles.wrapper}>
        <h3>About Me</h3>

        <div className={styles.section}>
          <img src="img/family.jpg" className={styles.family}/>
          <div className={styles.text}>
            <p>
              Hi! My name is Lana Osmun. Here are just a couple things about me.
            </p>
            <ul>
              <li>I was born in Lancaster, California</li>
              <li>I Currently live in Cedar HIlls, Utah</li>
              <li>I graduated from both Ricks College and BYU</li>
              <li>I'm learning how to quilt and love it</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <img src="img/husband.jpg" className={styles.husband}/>
          <div className={styles.text}>
            <ul>
              <li>I married John Osmun in the Los Angeles Temple</li>
              <li>I have 6 children; 3 boys and 3 girls</li>
              <li>My oldest son served a mission in Catania, Italy</li>
              <li>Two of my children are married and another is in college</li>
              <li>
                I love to {curActions[0]}, {curActions[1]} and {curActions[2]}!
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}
