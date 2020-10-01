import React from "react"
import ModalImage from "react-modal-image"
import styled from "styled-components"

export const ImgModal = ({ small, large, alt, className }) => {
  let smallSrc, largeSrc
  try {
    smallSrc = require(`../images/${small}`)
    largeSrc = require(`../images/${large}`)
  } catch (err) {
    console.log(err)
  }

  return (
    <ModalImage
      className={className || "modal-image"}
      small={smallSrc}
      large={largeSrc}
      alt={alt}
      hideZoom
      hideDownload
    />
  )
}

export const ImgWrapper = styled.div`
  /* width: 100%; */
  /* margin: auto; */
  margin: 0 auto;
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: ${({ theme }) => theme.mobileBP}) {
    width: auto;
    overflow-x: scroll;
    flex-wrap: nowrap;
    padding-top: 1rem;
  }
`

export const Img = ({ src, alt, className }) => {
  let imgSrc
  try {
    imgSrc = require(`../images/${src}`)
  } catch (err) {
    console.log(err)
  }

  return <img src={imgSrc} alt={alt} className={className} />
}
