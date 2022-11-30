// Style your elements here

import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 38px;
  color: #edeeff;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`
export const CardOne = styled.div`
  min-height: 35%;
  width: 30%;
  border-radius: 12px;
  border: none;
  background-color: #383a4e;
  padding: 30px;
  text-align: center;
  padding-bottom: 100px;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 40%;
  }
`
export const Para = styled.p`
  font-size: 14px;
  color: #edeeff;
  font-family: 'Roboto';
  font-weight: 400;
`
export const Input = styled.input`
  height: 40px;
  border: none;
  outline: none;
  background-color: #edeeff;
  width: 80%;
  color: #475569;
  margin-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`
export const ParaTwo = styled.p`
  font-size: 14px;
  color: #ef4444;
  font-family: 'Roboto';
  font-weight: 400;
`
