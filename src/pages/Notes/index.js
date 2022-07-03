import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { format, set } from 'date-fns';

import { Container, Wrapper, Content, Form, LabelButton, SpanErr, NoteList, Note, NoteContent, NoteFooter, TrashIcon } from './styles';
import { Search } from '../Weather/styles';
import { SearchIcon, SearchInput } from '../../components/searchBar';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

function Notes() {
   const { user } = useContext(AuthContext);
   const [title, setTitle] = useState('Anotação');
   const [notes, setNotes] = useState([]);
   const [filteredNotes, setFilteredNotes] = useState([]);
   // const [loading, setLoading] = useState(true);
   // const [isEmpty, setIsEmpty] = useState(false);

   const [text, setText] = useState('');
   const [nullNote, setNullNote] = useState(false);
  


   useEffect(() => {

      loadNotes();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


   async function loadNotes() {
      await firebase.firestore().collection('users').doc(user.uid).collection('notes').orderBy('created', 'desc') //POR ENQUANTO SEM LISTA INFINITA 
      .get()
      .then((snapshot) => {
         let list = [];
  
         snapshot.forEach((doc) => {          

                list.push({
               id: doc.id,
               title:doc.data().title,
               text: doc.data().text,
               created: doc.data().created,
               createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
            })
         });
         
         setNotes(list); 
      })
      .catch((err) => {
         console.log(err);
      })

      // setLoading(false);
   }


       const handleFilter = (event) => {
      const searchWord = event.target.value;
      const newFilter = notes.filter((value) => {

         return value.title.includes(searchWord);
      })

      setFilteredNotes(newFilter);
   }
   

  

   async function handleAddNote(e) {
      e.preventDefault();

      if (text !== '') {
         await firebase.firestore().collection('users')
         .doc(user.uid).collection('notes')
         .add({
            title:title,
            text: text,
            created: new Date(),
         })
         .then(() => {
            console.log('Anotação salva com sucesso!');
            setText('');
            setTitle('Anotação');
         })
         .catch((err) => {
            console.log(err);
         })

         setNullNote(false);
         setFilteredNotes([]);
         loadNotes();
      }
      else {
         setNullNote(true);
      }
	};

   async function handleDeleteNote(id) {
      await firebase.firestore().collection('users')
      .doc(user.uid).collection('notes').doc(id)
      .delete()
      .then(() => {
         console.log('Post excluído');
      })
      .catch(() => {
         console.log('algo deu errado');
      })

      loadNotes();
	};



   // if (loading) {
   //    return (
   //       <Container>
   //          <Navbar />

   //          <Wrapper>
   //             <Content>
   //                <Form>
   //                   <label>
   //                      <p>Carregando Anotações</p>
   //                   </label>
   //                </Form>
   //             </Content>
   //          </Wrapper>
   //       </Container>
   //    );
   // }

   return (
      <Container>
         <Navbar />

         <Wrapper>
            <Content>

            <Search>
                  <SearchIcon />
         
                  <SearchInput
                     defaultValue= ''
                     onChange= {handleFilter}
                     placeholder='Pesquise uma anotação...'
                     text='text'
                  />
               </Search>
               <Form onSubmit={handleAddNote}>
                  <input value={title}  onChange={ (e) => setTitle(e.target.value)}></input>
                  <textarea
                     value={text}
                     onChange={ (e) => setText(e.target.value) }
                     placeholder='Digite uma anotação...'
                  />

                  <LabelButton>
                     <Button type='submit' span={'Salvar'} />
                     { nullNote && <SpanErr>Não é possível salvar uma anotação vazia!</SpanErr>}
                  </LabelButton>
               </Form>
               

          

               {filteredNotes.length !== 0 ? (
                    <NoteList>

                     {filteredNotes.map((note, index) => (
                     <Note key={index}>
                        <NoteContent>
                           <span>{note.title}</span>
                           <span>{note.text}</span>
                           
            
                           <NoteFooter>
                              <small>{note.createdFormated}</small>
                              <TrashIcon
                                 onClick={() => handleDeleteNote(note.id)}
                                 className='delete-icon'
                                 size='1.3em'
                              />
                           </NoteFooter>
                        </NoteContent>
                     </Note>
                  ))}
                  </NoteList>
               ) : (

                  <NoteList>

                     {notes.map((note, index) => (
                     <Note key={index}>
                        <NoteContent>
                           <span>{note.title}</span>
                           <span>{note.text}</span>
                           
            
                           <NoteFooter>
                              <small>{note.createdFormated}</small>
                              <TrashIcon
                                 onClick={() => handleDeleteNote(note.id)}
                                 className='delete-icon'
                                 size='1.3em'
                              />
                           </NoteFooter>
                        </NoteContent>
                     </Note>
                  ))}
                  </NoteList>


               )
            }                 
               
            </Content>
         </Wrapper>
      </Container>
   );
}

export default Notes;