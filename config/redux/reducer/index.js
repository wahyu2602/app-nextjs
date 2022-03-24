import { actionType } from "../constanta";

const initialState = {
  books: [],
  book: null
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
    case actionType.GET_BOOK:
      return {
        ...state,
        book: state.books.find(book => book.id === action.payload.id)
      }
    case actionType.REMOVE_GET_BOOK:
      return {
        ...state,
        book: null
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
