import React from 'react';
import styled from 'styled-components';

export default function Textarea (props:any) {

  return (
    <Input {...props} />
  )
}

const Input = styled.textarea`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 8px;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  color: #777;
  outline: none;
  background: none;
  transition: .2s;
  resize: none;
  font-size: 14px;
  line-height: 18px;

  &:focus {
    color: #111;
    box-shadow: 0 0 2px 2px #3b8ff075;
  }
`