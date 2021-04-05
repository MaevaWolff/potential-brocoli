import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block; }
body {
  line-height: 1; }
ol, ul {
  list-style: none; }
blockquote, q {
  quotes: none; }
blockquote {
  &:before, &:after {
    content: '';
    content: none; } }
q {
  &:before, &:after {
    content: '';
    content: none; } }
table {
  border-collapse: collapse;
  border-spacing: 0; }
  
a{
  text-decoration: none;
  color: inherit;
}
* {
  box-sizing: border-box;
}



html {
  --header-height: 3em;
  --body-margin: 5em;
}


body {
  width: 100%;
  min-height: 100vh;
  font-family: 'RedRose';
  color: ${({ theme }) => theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  font-weight: lighter;
  font-family: 'Poppins';
}

`;
