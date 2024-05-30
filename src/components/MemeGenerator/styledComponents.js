import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
padding-top:40px;
padding-left:60px;
`
export const Flexbox = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
export const GeneratedImage = styled.div`
background-image:url('${props => props.bgImage}');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
height:340px;
width:500px;
background-size:cover;
`
export const Heading = styled.h1`
  color:#35469c;
  font-family:Roboto;
  font-size:42px;
`
export const Form = styled.form`
display:flex;
flex-direction:column;
padding-right:30px;
`
export const Label = styled.label`
color: #7e858e;
font-family:Roboto;
margin-bottom:8px;
`

export const Input = styled.input`
color:#7e858e;
width:400px;
border-radius:8px;
margin-bottom:10px;
padding:10px;
font-size:18px;
`
export const Select = styled.select`
color:#7e858e;
width:400px;
border-radius:8px;
margin-bottom:10px;
padding:10px;
font-size:18px;
`
export const Button = styled.button`
color:#ffffff;
background-color: #0b69ff;
border-radius:8px;
border:none;
padding:10px;
font-family:Roboto;
width:200px;
font-size:18px;
font-family:Roboto;
margin-top:8px;
cursor:pointer
`
export const Text = styled.p`
color:#ffffff;
font-weight:bold;
font-family:Roboto;
font-size:${props => props.font}px;
`
