import Navbar from '../components/navbar/_navbar';
import IndexHead from '../components/head/head';
import { useEffect, useState } from 'react';
import { postBooks, getBooks, updateBook, deleteBook } from '../config/services/books';
import { loadBooksDispatch, postBookDispatch, updateBookDispatch, removeGetBookDispatch, deleteBookDispatch, getBookDispatch } from '../config/redux/dispatch'
import { connect } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'

function Home({ books, loadBooksDispatch, postBookDispatch, book, updateBookDispatch, removeGetBookDispatch, deleteBookDispatch, getBookDispatch }) {
  const [message, setMessage] = useState();

  useEffect(() => {
    getBooks()
      .then((data) => {
        loadBooksDispatch(data)
      })
  }, [loadBooksDispatch])

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: ''
  });

  const resetValue = () => {
    setFormData({
      id: '',
      title: '',
      author: ''
    })
  }

  const handleValue = (e) => {
    const { name, value } = e.target
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }

  const hanleSubmit = (e) => {
    e.preventDefault();
    if (book === null) {
      postBooks(formData)
        .then((res) => {
          setMessage(res.message)
          postBookDispatch(formData)
          resetValue();
        })
    } else {
      updateBook(book.id, formData)
        .then((res) => {
          updateBookDispatch(book.id, formData);
          setMessage(res.message)
          resetValue();
          removeGetBookDispatch();
        })
    }
  }

  const handleDelete = (e) => {
    const id = e.target.id;
    deleteBookDispatch(id);
    deleteBook(id)
      .then((res) => {
        setMessage(res.message);
      })
  }

  const handleUpdate = (e) => {
    const id = e.target.id;
    const dataBook = books.find((book) => book.id == id)
    getBookDispatch(id)
    setFormData({
      id: dataBook.id,
      title: dataBook.title,
      author: dataBook.author
    })
  }

  return (
    <>
      <IndexHead title="HOME" />
      <Navbar />
      <div className="container mx-auto px-4 mt-5">
        <div className="shadow-md rounded p-4 border-2 border-solid">
          <p className="text-xl font-bold">Input Buku</p>
          <p className="text-red-500">{message}</p>
          <div className="mt-4">
            <form onSubmit={hanleSubmit}>
              <div className="mb-2">
                <label className="mb-1 block">ID Buku</label>
                {book == null ?
                  <input className="block outline-lime-500 border-2 border-lime-200 rounded p-1 w-full xl:w-96" type="number" name="id" onChange={handleValue} value={formData.id} required autoComplete='off' /> :
                  <input disabled className="block outline-lime-500 border-2 border-lime-200 rounded p-1 w-full xl:w-96" type="number" name="id" onChange={handleValue} value={formData.id} required autoComplete='off' />
                }
              </div>
              <div className="mb-2">
                <label className="mb-1 block">Judul Buku</label>
                <input className="block outline-lime-500 border-2 border-lime-200 rounded p-1 w-full xl:w-96" type="text" name="title" onChange={handleValue} value={formData.title} required autoComplete='off' />
              </div>
              <div className="mb-2">
                <label className="mb-1 block">Pengarang</label>
                <input className="block outline-lime-500 border-2 border-lime-200 rounded p-1 w-full xl:w-96" type="text" name="author" onChange={handleValue} value={formData.author} required autoComplete='off' />
              </div>
              <div className="mt-5">
                <button className="py-2 px-3 bg-green-500 rounded text-white hover:bg-green-700" type="submit">SAVE</button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap justify-start mb-10">
          {books.map(book =>
            <div key={book.id} className="mt-5 w-72 rounded bg-gray-100 m-auto p-4 shadow-md boder-solid border-2 border-gray-200">
              <div>
                ID : {book.id}
              </div>
              <div className="font-bold text-md">
                {book.title}
              </div>
              <div className="text-gray-600 italic">
                {book.author}
              </div>
              <div className="mt-5">
                <button id={book.id} className="py-2 px-3 bg-red-500 rounded text-white hover:bg-red-700" type="submit" onClick={handleDelete}>HAPUS</button>
                <button id={book.id} className="py-2 px-3 bg-blue-500 rounded text-white ml-3 hover:bg-blue-700" type="submit" onClick={handleUpdate}>UPDATE</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    book: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooksDispatch: (books) => dispatch(loadBooksDispatch(books)),
    postBookDispatch: (value) => dispatch(postBookDispatch(value)),
    updateBookDispatch: (id, value) => dispatch(updateBookDispatch(id, value)),
    removeGetBookDispatch: () => dispatch(removeGetBookDispatch()),
    deleteBookDispatch: (idBook) => dispatch(deleteBookDispatch(idBook)),
    getBookDispatch: (idBook) => dispatch(getBookDispatch(idBook))
  }
}

// Home.getInitialProps = async (ctx) => {
//   const data = await getBooks()
//     .then(data => {
//       return data
//     })

//   return { books: data }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;


