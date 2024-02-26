import React from 'react'
const logo  =require('../images/noTasks.jpg')

const NoTask = () => {
  return (
    <div className='notask'>
        <h1>heyy..No tasks for you</h1>
<img src={logo} alt='empty bucket'></img>
    </div>
  )
}

export default NoTask