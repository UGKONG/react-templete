import React from 'react';
import styled from 'styled-components';

export default function DateInput (props:any) {

  return (
    <Input {...props} />
  )
}

const Input = styled.input.attrs(() => ({
  type: 'date',
}))`
  position: relative;
  width: 120px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  color: #777;
  outline: none;
  background: none;
  transition: .2s;
  user-select: none;

  &::-webkit-clear-button, 
  &::-webkit-inner-spin-button {
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: 18px;
    background-position: 90% 36%;
    color: transparent;
    cursor: pointer;
  }

  &:focus {
    color: #111;
    box-shadow: 0 0 2px 2px #3b8ff075;
  }
`