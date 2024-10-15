import Book from "./Components/Book.jsx"
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
 
const BooksList = () => {
  const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: img1,
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: img2,
};
  return (
    <section className="books-container">
      <Book imgSrc={firstBook.img} title={firstBook.title} author={firstBook.author}   >
      <h3>8:00</h3>
      </Book> 
      <Book imgSrc={secondBook.img} title={secondBook.title} author={secondBook.author}   >      <h3>7:00</h3></Book> 
   
      
    </section>
  )
}
export default BooksList