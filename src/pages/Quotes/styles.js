import styled from 'styled-components';


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

export const SpanErr = styled.span`
   display: block;
   margin: 7px 15px 0;
   font-size: 1.1rem;
   font-weight: 500;
   color: ${props => props.theme.colors.error};
`;