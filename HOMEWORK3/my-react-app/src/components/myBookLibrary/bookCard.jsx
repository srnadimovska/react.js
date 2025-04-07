 import "./BookCard.css"
 function BookCard ({book}) {
    return (
        <div className="card-div">
            <h2>{book.title}</h2>
            <p>Author:{book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Availability: {book.available ? "Available" : "Not available"}</p>
        </div>
    )
 }
 export default BookCard