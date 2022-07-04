import React, { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import { Container,  Main, SpanErr} from './styles';
//import { SearchIcon, SearchInput } from '../../components/searchBar';
import axios from 'axios';
import Navbar from '../../components/Navbar';
//import { Search } from '../Weather/styles';

function Quotes() {


   const [data, setData] = useState({})
   const [error, setError] = useState(false);
   var Buffer = require('buffer/').Buffer
 //  const [searchThinker, setSearchThinker] = useState('');

   
async function searchQuote() {

   const pensador = await require('pensador-api');


   pensador({term: "Elon Musk", max: 5})
}

   return (
      <Container>
         <Navbar />
         <Main>  

            {
       /*  <Search onSubmit = {searchQuote}>
                  <SearchIcon />
         
                  <SearchInput
                    defaultValue={searchThinker}
                     onChange = {(e) => setSearchThinker(e.target.value)}
                     placeholder='Pesquise um pensador...'
                     text='text'
                  />

                  { error && <SpanErr>Local inválido, digite novamente.</SpanErr> }
               </Search>
*/

            }

 

       
            <div>

               <h1>Teste</h1>

               <button onClick={searchQuote}>Aperte aqui</button>

               {
                  
               }
             

            </div>
         </Main>
      </Container>
   );
}

export default Quotes;