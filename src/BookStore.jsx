import Book from "./Book"
export default function BookStore( {books}) {
  // console.log(books)
  return (
    <div>
      {
        books.map(book =><Book book = {book}></Book>)
      }
   </div>
  )
}