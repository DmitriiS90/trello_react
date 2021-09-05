const ADD_BOARD = 'ADD_BOARD'
const ADD_NOTES = 'ADD_NOTES'
const ADD_LIST_ITEM = 'ADD_LIST_ITEM'
const SET_ID_BOARD = 'SET_ID_BOARD'


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
            const note = board.notes.find(n => n.id === action.payload.idNote)          
            note.list.push(action.payload.item)
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
    return { type: ADD_LIST_ITEM, payload: { idNote, item } }
}

export const setId = (id) => {
    return { type: SET_ID_BOARD, id }
}

export default boardListReducer