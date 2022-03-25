import { actionType } from "../constanta";

const initialState = {
  books: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      }
    case actionType.POST_BOOK:
      const readyBooks = state.books.find((item) => item.id === action.payload.id ? true : false);
      return {
        ...state,
        books: readyBooks ? state.books : [...state.books, { ...action.payload.value, id: action.payload.id }],
      }
    case actionType.UPDATE_BOOK:
      const dataBooks = state.books.find(book => book.id == action.payload.id ? true : false)
      return {
        ...state,
        books: dataBooks ? state.books.map(book => book.id === action.payload.id ? { ...action.payload.value, id: action.payload.id } : book) : state.books
      }
    case actionType.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default rootReducer;
