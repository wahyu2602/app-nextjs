import Navbar from '../components/navbar/_navbar';
import IndexHead from '../components/head/head';
import Card from '../components/card/_card';
import { useEffect, useState } from 'react';
import { postBooks, getBooks, updateBook } from '../config/services/books';
import { loadBooksDispatch, postBookDispatch } from '../config/redux/dispatch'
import { connect } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'

function Home({ books, loadBooksDispatch, postBookDispatch, book }) {
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
      [name]: value
    }));
    console.log(formData.id);
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
          setMessage(res.message)
          resetValue();
        })
    }
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
                <input className="block outline-lime-500 border-2 border-lime-200 rounded p-1 w-full xl:w-96" type="number" name="id" onChange={handleValue} value={formData.id} placeholder={book == null ? formData.id : book.id} required autoComplete='off' />
              </div>
              <div className="mb-2">
                <label className="mb-1 block">Judul Buku</label>
                <input className="block outline-lime-500 border-2 border-lime-200 rounded p-1 w-full xl:w-96" type="text" name="title" onChange={handleValue} value={formData.title} placeholder={book == null ? formData.title : book.title} required autoComplete='off' />
              </div>
              <div className="mb-2">
                <label className="mb-1 block">Pengarang</label>
                <input className="block outline-lime-500 border-2 border-lime-200 rounded p-1 w-full xl:w-96" type="text" name="author" onChange={handleValue} value={formData.author} placeholder={book === null ? formData.author : book.author} required autoComplete='off' />
              </div>
              <div className="mt-5">
                <button className="py-2 px-3 bg-green-500 rounded text-white hover:bg-green-700" type="submit">SAVE</button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mb-10">
          {books.map(book =>
            <Card key={book.id} id={book.id} title={book.title} author={book.author} />
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
    postBookDispatch: (value) => dispatch(postBookDispatch(value))
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


