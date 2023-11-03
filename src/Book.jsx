import './Book.css'
export default function Book({ book }) {
  // console.log(book)
   const  {name, author, price} = book
  return (
    <div className='book '>
      <h3>Name: {name} </h3>
      <h4>Author: {author} </h4>
      <h4>Price: {price}</h4>
    </div>
  );
}