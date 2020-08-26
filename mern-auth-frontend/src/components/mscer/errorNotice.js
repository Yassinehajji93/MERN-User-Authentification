import React from 'react'

export default function errorNotice(props) {
  return (
    <div className="error-notice">
      <span>{props.message}</span>
      <button onClick={props.clearNotice}>X</button>
      
    </div>
  )
}
