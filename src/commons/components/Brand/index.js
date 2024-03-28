import React from 'react'
import { Link } from 'react-router-dom'

const Brand = ({ onCLick }) => {
  return (
    <Link
      to={'/'}
      onClick={onCLick}
      className="btn btn-ghost normal-case text-xl"
    >
      Bayarkita
    </Link>
  )
}

export default Brand
