import styled from "styled-components";

export default styled.button`
  /* general in any theme*/
  direction: ltr;
  padding: 5px;
  overflow: hidden;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  -webkit-backface-visibility: hidden;
  outline: 0;
  :disabled {
    cursor: default;
    opacity: .4;
    box-shadow: none;
  }

  /* theme common */
  ${({theme})=>theme.buttons.common}

  /* theme specific */
  ${(props)=>{
    if (props.primary){
      return props.theme.buttons.primary
    } else if(props.secondary){
      return props.theme.buttons.secondary
    } else if(props.danger){
      return props.theme.buttons.danger
    } else if(props.warning){
      return props.theme.buttons.warning
    } else if(props.info){
      return props.theme.buttons.info
    } else if(props.success){
      return props.theme.buttons.success
    } else {
      return props.theme.buttons.default
    }
  }}


`