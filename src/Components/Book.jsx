/* eslint-disable react/prop-types */
 
const Book = ( { imgSrc , title , author , children}) => {
 
   
  return (
     <article> 
<img src={imgSrc}  />
 <h3>{title}</h3>
 <p>{author}</p>
      {children }
    </article>
  )
}
export default Book