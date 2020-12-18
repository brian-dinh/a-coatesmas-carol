import React from 'react'
import {
  Link
} from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Where you trying to go?</h2>
      <Link to="/">Go home</Link>
    </div>
  )
}
