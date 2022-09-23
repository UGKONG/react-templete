import React from 'react';
import styled from 'styled-components';

export default function TextInput (props:any) {

  return (
    <Input {...props} />
  )
}

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  position: relative;
  width: 150px;
  height: 32px;
  padding: 0 8px;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  color: #777;
  outline: none;
  background: none;
  transition: .2s;

  &:focus {
    color: #111;
    box-shadow: 0 0 2px 2px #3b8ff075;
  }
`