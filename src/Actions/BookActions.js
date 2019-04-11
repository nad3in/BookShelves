export const ADD_BOOK_TO_CURRENTLY_READING = "ADD_BOOK_TO_CURRENTLY_READING";
export const ADD_BOOK_TO_WANT_TO_READ = "ADD_BOOK_TO_WANT_TO_READ";
export const ADD_BOOK_TO_READ = "ADD_BOOK_TO_READ";
export const SET_STATE_FROM_LOCAL_STORAGE = "SET_STATE_FROM_LOCAL_STORAGE";


export function getStateFromLocalStorage(state) {
    return {
        type: SET_STATE_FROM_LOCAL_STORAGE,
        state: state
    };
}
export function addBookToCurrentlyReading(book) {
    return {
        type: ADD_BOOK_TO_CURRENTLY_READING,
        bookToAdd: book
    };
}
export function addBookToWantToRead(book) {
    return {
        type: ADD_BOOK_TO_WANT_TO_READ,
        bookToAdd: book
    };
}
export function addBookToRead(book) {
    return {
        type: ADD_BOOK_TO_READ,
        bookToAdd: book
    };
}