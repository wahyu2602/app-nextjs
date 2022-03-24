export async function getBooks() {
  const response = await fetch("https://books-api.dicoding.dev/list")
  const data = await response.json();
  const books = data.books
  return books
}

export async function postBooks(data) {
  const response = await fetch("https://books-api.dicoding.dev/add", {
    method: 'POST',
    headers: {
      "X-Auth-Token": 12345,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

export async function updateBook(id, data) {
  const response = await fetch(`https://books-api.dicoding.dev/edit/${id}`, {
    method: 'PUT',
    headers: {
      "X-Auth-Token": 12345,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return response.json();
}

export async function deleteBook(id) {
  await fetch(`https://books-api.dicoding.dev/delete/${id}`, {
    method: 'DELETE',
    headers: {
      "X-Auth-Token": 12345,
      "Content-Type": "application/json"
    }
  })
}