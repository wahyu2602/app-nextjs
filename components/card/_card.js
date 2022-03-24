import { deleteBook } from "../../config/services/books"
import { deleteBookDispatch, getBookDispatch } from "../../config/redux/dispatch"
import { connect } from "react-redux"

function Card(props) {
  const handleDelete = (e) => {
    const id = e.target.id;
    props.deleteBookDispatch(id);
    deleteBook(id)
  }

  const handleUpdate = (e) => {
    const id = e.target.id;
    props.getBookDispatch(id)
  }

  return (
    <div className="mt-5 w-72 rounded bg-gray-100 m-auto p-4 shadow-md boder-solid border-2 border-gray-200">
      <div>
        ID : {props.id}
      </div>
      <div className="font-bold text-md">
        {props.title}
      </div>
      <div className="text-gray-600 italic">
        {props.author}
      </div>
      <div className="mt-5">
        <button id={props.id} className="py-2 px-3 bg-red-500 rounded text-white hover:bg-red-700" type="submit" onClick={handleDelete}>HAPUS</button>
        <button id={props.id} className="py-2 px-3 bg-blue-500 rounded text-white ml-3 hover:bg-blue-700" type="submit" onClick={handleUpdate}>UPDATE</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBookDispatch: (idBook) => dispatch(deleteBookDispatch(idBook)),
    getBookDispatch: (idBook) => dispatch(getBookDispatch(idBook))
  }
}

export default connect(null, mapDispatchToProps)(Card);
