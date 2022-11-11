import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

body {
  line-height: 1;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.primaryB};
  color: ${({ theme }) => theme.colors.primary};
}
main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
}
footer{
  background-color: ${({ theme }) => theme.colors.primaryB};
  color: ${({ theme }) => theme.colors.primary};
}
${({theme})=>(theme.css)}
`