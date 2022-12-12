import React from 'react'

const Task = () => {
  return (
    <div><div id="container">
    <h1>To-Do List <i className="fa fa-plus" /></h1>
    <input type="text" placeholder="Add New Todo" />
    <ul>
      <li><span><i className="fa fa-trash" /></span> Go To Maths Class</li>
      <li><span><i className="fa fa-trash" /></span> Buy New Clothes</li>
      <li><span><i className="fa fa-trash" /></span> Visit George</li>
    </ul>
  </div></div>
  )
}

export default Task