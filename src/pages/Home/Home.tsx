import { useState } from "react";
import { useStoreActions, useStoreState } from "../../store/hooks";


export interface Name{
    name:string;
}

function Home(name: Name){
const {books}= useStoreState(store=> store.booksModel)
const {hasBook, book}= useStoreState(store=> store.userModel)
const {borrowBookThunk}= useStoreActions(actions=> actions.userModel)
const [bookId, SetBookId] = useState('')
function handleBookBorrow(){
  borrowBookThunk(parseInt(bookId))
}
    return(
        <>
        <div><h1>Hello Home page {name.name}</h1></div>
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

export default Home;