import React from 'react'

const actions = [
  'play the piano',
  'read',
  'make great cookies',
  'eat chocolate',
  'sew',
  'tell jokes',
  'play with our puppies',
  'make cakes',
  'watch tv',
  'spend time with my family'
]

function getUniqueAction (curActions) {
  const rand = Math.floor(Math.random() * actions.length)
  const newAction = actions[rand]
  return curActions.includes(newAction)
    ? getUniqueAction(curActions)
    : newAction
}

export default function About () {
  const curActions = []
  curActions.push(getUniqueAction(curActions))
  curActions.push(getUniqueAction(curActions))
  curActions.push(getUniqueAction(curActions))

  return (
    <div id='about-me'>
      <h3>About Me</h3>

      <div className='section'>
        <div>
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
        <img src='/img/family.jpg' />
      </div>

      <div className='section'>
        <img src='/img/husband.jpg' />
        <div>
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