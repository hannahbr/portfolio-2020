import React from "react"
import ModalImage from "react-modal-image"

const Img = ({ small, large, alt }) => {
  let smallSrc, largeSrc
  try {
    smallSrc = require(`../images/${small}`)
    largeSrc = require(`../images/${large}`)
  } catch (err) {
    console.log(err)
  }

  return <ModalImage small={smallSrc} large={largeSrc} alt={alt} />
}

export default Img
