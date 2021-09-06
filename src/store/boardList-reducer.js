const ADD_BOARD = 'ADD_BOARD'
const ADD_NOTES = 'ADD_NOTES'
const ADD_LIST_ITEM = 'ADD_LIST_ITEM'
const SET_ID_BOARD = 'SET_ID_BOARD'
const DRAG_LIST_ITEM = 'DRAG_LIST_ITEM'


let initialState = {
    boards: [],
    idBoard: null
}

const boardListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOARD:
            return {
                ...state,
                boards: [...state.boards, action.newBoard]
            }
        case ADD_NOTES: {
            const board = state.boards.find(b => b.id === state.idBoard)
            board.notes.push(action.note)
            return {
                ...state,
                boards: [...state.boards.filter(b => b.id !== state.idBoard), board]
            }
        }
        case ADD_LIST_ITEM: {
            const board = state.boards.find(b => b.id === state.idBoard)
            const note = board.notes.find(n => n.id === action.idNote)
            note.list.push({ id: note.list.length + 1, order: note.list.length + 1, item: action.item })
            return {
                ...state,
                boards: [...state.boards.filter(b => b.id !== state.idBoard), board]
            }
        }
        case DRAG_LIST_ITEM: {
            const board = state.boards.find(b => b.id === state.idBoard)
            const note = board.notes.find(n => n.id === action.idNote)
            note.list = [...action.list]
            debugger
            return {
                ...state,
                boards: [...state.boards.filter(b => b.id !== state.idBoard), board]
            }
        }
        case SET_ID_BOARD:
            return {
                ...state,
                idBoard: action.id
            }
        default:
            return state;
    }
}

export const addBoard = (newBoard) => {
    return { type: ADD_BOARD, newBoard }
}

export const addNotes = (note) => {
    return { type: ADD_NOTES, note }
}

export const addListItem = ({ idNote, item }) => {
    return { type: ADD_LIST_ITEM, idNote, item }
}
export const dragListItem = ( idNote, list ) => {
    return { type: DRAG_LIST_ITEM, idNote, list}
}

export const setIdBoard = (id) => {
    return { type: SET_ID_BOARD, id }
}

export default boardListReducer