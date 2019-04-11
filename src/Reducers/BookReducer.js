import {
    ADD_BOOK_TO_CURRENTLY_READING,
    ADD_BOOK_TO_WANT_TO_READ,
    ADD_BOOK_TO_READ,SET_STATE_FROM_LOCAL_STORAGE
} from "../Actions/BookActions";

export default function BookReducer(state = {currentlyReading: [],wantToRead: [],read: []},action) {
    var book=action.bookToAdd
    var read=state.read
    var currentlyReading=state.currentlyReading
    var wantToRead=state.wantToRead

    switch (action.type) {
        case SET_STATE_FROM_LOCAL_STORAGE:
        return action.state
        case ADD_BOOK_TO_CURRENTLY_READING:
        if(book.state===""){
            book.state="CurrentlyReading"
            currentlyReading= [...state.currentlyReading, book]
        }
        if(book.state==="WantToRead"){
                var BookIndex =wantToRead.indexOf(book)
                wantToRead.splice(BookIndex,1)
                state.wantToRead=wantToRead
                book.state="CurrentlyReading"
                currentlyReading= [...state.currentlyReading, book]
        }
        if(book.state==="Read"){
            BookIndex =read.indexOf(book)
            read.splice(BookIndex,1)
            book.state="CurrentlyReading"
            currentlyReading= [...state.currentlyReading, book]
        }
        localStorage.setItem('state', JSON.stringify({
            currentlyReading: currentlyReading,
            wantToRead: wantToRead,
            read: read
            }))
        return {
            currentlyReading: currentlyReading,
            wantToRead: wantToRead,
            read: read
        };


        case ADD_BOOK_TO_WANT_TO_READ:
        if(book.state===""){
            book.state="WantToRead"
            wantToRead= [...state.wantToRead, book]
        }
        if(book.state==="CurrentlyReading"){
                BookIndex =currentlyReading.indexOf(book)
                currentlyReading.splice(BookIndex,1)
                book.state="WantToRead"
                wantToRead= [...state.wantToRead, book]
        }
        if(book.state==="Read"){
            BookIndex =read.indexOf(book)
            read.splice(BookIndex,1)
            book.state="WantToRead"
            wantToRead= [...state.wantToRead, book]
        }
        localStorage.setItem('state', JSON.stringify({
            currentlyReading: currentlyReading,
            wantToRead: wantToRead,
            read: read
            }))
        return {
        currentlyReading: currentlyReading,
        wantToRead: wantToRead,
        read: read
        };


        case ADD_BOOK_TO_READ:
        if(book.state===""){
            book.state="Read"
            read= [...state.read, book]
        }
        if(book.state==="CurrentlyReading"){
                BookIndex =currentlyReading.indexOf(book)
                currentlyReading.splice(BookIndex,1)
                book.state="Read"
                read= [...state.read, book]
        }
        if(book.state==="WantToRead"){
            BookIndex =wantToRead.indexOf(book)
            wantToRead.splice(BookIndex,1)
            state.wantToRead=wantToRead
            book.state="Read"
            read= [...state.read, book]
        }
        localStorage.setItem('state', JSON.stringify({
            currentlyReading: currentlyReading,
            wantToRead: wantToRead,
            read: read
            }))
        return {
        currentlyReading:currentlyReading,
        wantToRead:wantToRead,
        read: read
        };
        default:
            return state;
    }
}
