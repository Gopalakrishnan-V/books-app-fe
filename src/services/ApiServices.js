import axios from "axios";

const baseUrl = "https://api-books-app.herokuapp.com/api";

export const fetchAllBooks = () => {
  return axios.get(`${baseUrl}/v1/books`);
};

export const fetchBookDetails = bookId => {
  return axios.get(`${baseUrl}/v1/books/${bookId}`);
};

export const createBook = data => {
  return axios.post(`${baseUrl}/v1/books/`, data);
};

export const updateBook = (id, data) => {
  return axios.put(`${baseUrl}/v1/books/${id}`, data);
};

export const deleteBook = id => {
  return axios.delete(`${baseUrl}/v1/books/${id}`);
};
