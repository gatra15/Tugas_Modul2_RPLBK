import styled, {css} from 'styled-components';

export default styled.h4
`
font-family: 'roboto';
font-size:50px;
border:2px solid;
padding:10px;
background:red;
${(props) => props.display && css`
display:${(props) =>props.display}; `}
color:black;
margin-bottom:30px; `;