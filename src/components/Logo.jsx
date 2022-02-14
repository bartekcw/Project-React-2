import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return (
    <div className="titlebox"> <FontAwesomeIcon icon={faCalculator} /> <div className="box1">Przelicznik walut</div> </div>
  )
}

export default Logo