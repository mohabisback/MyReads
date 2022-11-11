import {css} from 'styled-components'
import colors from '../colors.js'

const defaultTheme = {
  name: "Default",
  colors: {//higher number is darker
    primary: colors.blue9,
    primary2: colors.blue7,
    secondary: colors.blue3,
    secondary2: colors.blue1,
  },
  css: css``,
  buttons: {
    common: css`
      border-radius: 3%;
      transition: box-shadow .15s,transform .15s;
      will-change: box-shadow, transform;
      :hover {
        -webkit-transform: translate3d(0,-2px,0) !important;
        transform: translate3d(0,-2px,0) !important;
        font-smoothing: antialiased !important;
        -webkit-filter: blur(0.000001px);
      }
      :active {
        -webkit-transform: translate3d(0,2px,0) !important;
        transform: translate3d(0,2px,0) !important;
        font-smoothing: antialiased !important;
        -webkit-filter: blur(0.000001px);
      }
    `,
    primary: css`
      color: ${colors.blue0};
      background: linear-gradient(${colors.blue7}, ${colors.blue9});
      border: 1px solid ${colors.blue9};
      box-shadow: 0 2px 2px ${colors.blue0};
      :hover {
        background: linear-gradient(${colors.blue5}, ${colors.blue7});
        box-shadow: 0 5px 5px ${colors.blue9};
      }
      :focus {
        -webkit-box-shadow: 0 0 10px ${colors.blue9}; 
        box-shadow: 0 0 10px ${colors.blue9};
      }
    `,
    secondary: css`
      color: ${colors.blue9};
      background: linear-gradient(${colors.blue2}, ${colors.blue0});
      border: 1px solid ${colors.blue9};
      box-shadow: 0 2px 2px ${colors.blue9};
      :hover {
        color: ${colors.blue0};
        background: linear-gradient(${colors.blue7}, ${colors.blue9});
        box-shadow: 0 5px 5px ${colors.blue0};
      }
      :focus {
        -webkit-box-shadow: 0 0 10px ${colors.blue9}; 
        box-shadow: 0 0 10px ${colors.blue9};
      }
    `,
    default: css`
      color: ${colors.blue9};
      background: linear-gradient(${colors.blue2}, ${colors.blue0});
      border: 1px solid ${colors.blue9};
      box-shadow: 0 2px 2px ${colors.blue9};
      :hover {
        color: ${colors.blue9};
        background: linear-gradient(${colors.blue1}, ${colors.blue3});
        box-shadow: 0 5px 5px ${colors.blue0};
      }
      :focus {
        -webkit-box-shadow: 0 0 10px ${colors.blue9}; 
        box-shadow: 0 0 10px ${colors.blue9};
      }
    `,
    danger: css`
      color: ${colors.red0};
      background: linear-gradient(${colors.red7}, ${colors.red9});
      border: 1px solid ${colors.red9};
      box-shadow: 0 2px 2px ${colors.red3};
      :hover {
        background: linear-gradient(${colors.red5}, ${colors.red7});
        box-shadow: 0 5px 5px ${colors.red9};
      }
      :focus {
        -webkit-box-shadow: 0 0 10px ${colors.red9}; 
        box-shadow: 0 0 10px ${colors.red9};
      }
    `,
    warning:css`
      color: ${colors.orange0};
      background: linear-gradient(${colors.orange7}, ${colors.orange9});
      border: 1px solid ${colors.orange9};
      box-shadow: 0 2px 2px ${colors.orange3};
      :hover {
        background: linear-gradient(${colors.orange5}, ${colors.orange7});
        box-shadow: 0 5px 5px ${colors.orange9};
      }
      :focus {
        -webkit-box-shadow: 0 0 10px ${colors.orange9}; 
        box-shadow: 0 0 10px ${colors.orange9};
      }
    `,
    info: css`
      color: ${colors.cyan0};
      background: linear-gradient(${colors.cyan7}, ${colors.cyan9});
      border: 1px solid ${colors.cyan9};
      box-shadow: 0 2px 2px ${colors.cyan3};
      :hover {
        background: linear-gradient(${colors.cyan5}, ${colors.cyan7});
        box-shadow: 0 5px 5px ${colors.cyan9};
      }
      :focus {
        -webkit-box-shadow: 0 0 10px ${colors.cyan9}; 
        box-shadow: 0 0 10px ${colors.cyan9};
      }
    `,
    success: css`
      color: ${colors.green0};
      background: linear-gradient(${colors.green7}, ${colors.green9});
      border: 1px solid ${colors.green9};
      box-shadow: 0 2px 2px ${colors.green3};
      :hover {
        background: linear-gradient(${colors.green5}, ${colors.green7});
        box-shadow: 0 5px 5px ${colors.green9};
      }
      :focus {
        -webkit-box-shadow: 0 0 10px ${colors.green9}; 
        box-shadow: 0 0 10px ${colors.green9};
      }
    `
  },
}
export default defaultTheme