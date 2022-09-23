/* eslint-disable react/style-prop-object */
import React, { useMemo } from 'react';
import styled from 'styled-components';

export default function Checkbox (props:any) {

  const id = useMemo(() => String(Math.random()), [])

  return (
    <>
      <Input id={id} {...props} />
      <Label htmlFor={id}>
        <Svg>
          <Path />
        </Svg>
      </Label>
    </>
  )
}

const Input = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: none;

  &:checked {
    & + label {
      border: 1px solid #3b8ff0;
      path {  
        fill: #3b8ff0 !important;
      }
    }
  }
`
const Svg = styled.svg.attrs(() => ({
  'xmlns': "http://www.w3.org/2000/svg",
  'viewBox': "0 0 17.837 17.837",
  'version': "1.1",
  'x': "0px",
  'y': "0px",
}))``
const Path = styled.path.attrs(() => ({
  d: `
    M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,
    10.804l-4.241-4.27c-0.272-0.274-0.715-0.274-0.989,
    0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,
    6.258c0.272,0.271,0.715,0.271,0.99,0L17.63,
    5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z
  `
}))`
  transition: .2s;
  fill: #bbb;
`
const Label = styled.label`
  display: block;
  min-width: 24px;
  max-width: 24px;
  min-height: 24px;
  max-height: 24px;
  border-radius: 50%;
  transition: .2s;
  border: 1px solid #e1e1e1;
  padding: 1px 5px;
  box-sizing: border-box;
  cursor: pointer;
`