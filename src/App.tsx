
import React, { useState } from "react";

import {useStoreState , useStoreActions} from './store/hooks';
import { store } from "./store";
import { action } from "easy-peasy";

function App() {
const {books}= useStoreState(store=> store.booksModel)
const {hasBook, book}= useStoreState(store=> store.userModel)
const {borrowBookThunk}= useStoreActions(actions=> actions.userModel)

const [bookId, SetBookId] = useState('')
function handleBookBorrow(){
  borrowBookThunk(parseInt(bookId))
}
return (
    <>
       <div>
        <h1>hello{JSON.stringify(books)}</h1>
        {hasBook && <p>book present : {book.title}</p>}
        {!hasBook && <p>no book</p>}
        <input value={bookId} onChange={(e)=>SetBookId(e.target.value)}></input>
        <button onClick={()=>handleBookBorrow()}>submit</button>
      </div>
    </>
  )
}

export default App
