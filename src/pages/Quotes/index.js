import React, { useState} from 'react';
import { Container, Wrapper, Content, QuoteDiv, RandomQuote, LabelButton, QuoteLeft, QuoteRight} from './styles';
//import { SearchIcon, SearchInput } from '../../components/searchBar';
import axios from 'axios';
import Navbar from '../../components/Navbar';
//import { Search } from '../Weather/styles';

function Quotes() {

   const api = axios.create({baseURL: 'https://positive-vibes-api.herokuapp.com'});


   const [data, setData] = useState({})

 //  const [searchThinker, setSearchThinker] = useState('');

   
async function searchQuote() {

      api.get("/quotes/random").then((res) => {setData(res.data)}).catch((err) => {console.log("Houve um erro: " + err);});


}

   return (
      <Container>
         <Navbar />
         <Wrapper>  

            <Content>

            <QuoteDiv>

              <RandomQuote>

               <LabelButton>

               <button onClick={searchQuote}>Gerar frase</button> 

               </LabelButton>

               <QuoteLeft/><p>{data?.data}</p> <QuoteRight/>

              </RandomQuote>             

            </QuoteDiv>

            </Content>       

         </Wrapper>
      </Container>
   );
}

export default Quotes;