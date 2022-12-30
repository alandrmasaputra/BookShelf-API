const { handler } = require('@hapi/hapi/lib/cors');
const {
    saveBook, getAllBook, getBookById, editBookById, deleteBook
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: saveBook
    },

    {
        method: 'GET',
        path: '/books',
        handler: getAllBook
    },

    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookById
    },

    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookById
    },

    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBook
    }
];


module.exports = routes;