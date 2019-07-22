// ------------------------------------
// Constants
// ------------------------------------
export const TODOS_ADD = 'TODOS_ADD'
export const TODOS_REMOVE = 'TODOS_REMOVE'
export const TODOS_EDIT = 'TODOS_EDIT'

// ------------------------------------
// Actions
// ------------------------------------
export function add (todo = '') {
  return {
    type: TODOS_ADD,
    payload: todo,
  }
}

export function remove (todo) {
  return {
    type: TODOS_REMOVE,
    payload: todo
  }
}

export function edit (todo, id) {
  return {
    type: TODOS_EDIT,
    payload: todo,
    id: id
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TODOS_ADD]: (state, action) => [...state, action.payload] ,
  [TODOS_REMOVE]: (state, action) => state.filter(t => t !== action.payload),
  [TODOS_EDIT]: (state, action) =>state.map((item, i) => (i==action.id-1) ? action.payload : item)
}
// console.log(action.payload, action.id)
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : ['Buy milk', 'Do exercises', 'Cook dinner']
export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
