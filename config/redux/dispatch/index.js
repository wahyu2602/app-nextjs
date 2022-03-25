import { actionType } from "../constanta";

export const loadBooksDispatch = (books) => {
  return {
    type: actionType.GET_BOOKS,
    payload: books
  }
}

export const updateBookDispatch = (id, value) => {
  return {
    type: actionType.UPDATE_BOOK,
    payload: {
      id: Number(id),
      value,
    }
  }
}

export const postBookDispatch = (value) => {
  return {
    type: actionType.POST_BOOK,
    payload: {
      id: Number(value.id),
      value: value
    }
  }
}

export const deleteBookDispatch = (idBook) => {
  return {
    type: actionType.DELETE_BOOK,
    payload: {
      id: Number(idBook)
    }
  }
}