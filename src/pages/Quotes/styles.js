import styled, {css} from 'styled-components';
import { ImQuotesLeft, ImQuotesRight} from '../../styles/icons';



export const Container = styled.div`
   display: flex;
   flex-direction: row;
`;

export const Main = styled.main`
   display:flex;
   padding: 5em;
`;

export const Search = styled.form`
   margin-bottom: 33px;
`;

export const Wrapper = styled.div`
   padding: 0 14px 20px;
   
   @media (min-width: 425px) {
      margin-left: 73px;
      padding: 60px 30px;
   }

   @media (min-width: 1024px) {
      margin-left: 290px;
      padding: 60px 120px;
   }

   @media (min-width: 1440px) {
      margin-left: 420px;
      padding: 60px 150px;
   }
`;

export const Content = styled.div`
   width: 100%; 
`;

export const QuoteDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex;
   align-items: center;
   min-width: 900px;
   padding: 50px 65px;
   background: ${props => props.theme.colors.bg_component};
   border-radius: 30px;

   @media (min-width: 1370px) {
      flex-direction: row;
   }
`;


export const RandomQuote = styled.div`
   margin-bottom: 23px;
   color: #6D779B;

   > p {
      margin-left: 5px;
      font-size: 2em;
      padding: 25px;
   }

   > span {
      margin-left: 7px;
      font-size: 1.4rem;
   }
`;

export const LabelButton = styled.div`
   display: center;
   margin-left:300px;
   flex-direction: row;
   align-items: center;

   button {

      margin: 47px 0 20px;
      padding: 25px;
      font-size: 1.3rem;
      font-weight: bold;
      text-align: center;
      letter-spacing: 0.03rem;
      color: #f8f8f8;
      background: linear-gradient(90deg, rgba(83,17,185,1) 0%, rgba(118,47,227,1) 35%, rgba(156,90,217,1) 100%);
      border: none;
      border-radius: 11px;
      cursor: pointer;
   }

   button:hover {
         filter: brightness(1.2);
      }
`;


const iconCSS = css`
   flex-shrink: 0;
   width: 33px;
   height: 33px;
`;


export const QuoteLeft = styled(ImQuotesLeft)`
   ${iconCSS}
   display: none;
   transition: .0s;
   margin-right:3px;

   @media (min-width: 1024px) {
      display: inline;
   }
`;

export const QuoteRight = styled(ImQuotesRight)`
   ${iconCSS}
   display: none;
   transition: .0s;
   margin-left:700px;

   @media (min-width: 1024px) {
      display: inline;
   }
`;



