import { useState } from "react";

export function useBooks(){

  const [books,setBooks] = useState([
    {id:"1",title:"Dom Casmurro",author:"Machado de Assis"},
    {id:"2",title:"1984",author:"George Orwell"}
  ])

  function addBook(title:string,author:string){

    const newBook = {
      id: Math.random().toString(),
      title,
      author
    }

    setBooks([...books,newBook])

  }

  return {books,addBook}

}