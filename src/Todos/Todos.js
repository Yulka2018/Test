import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Todos  ({ todos, remove, add, edit}){ 
  const [todo, setTodo] = useState('');
  const [id, setId] = useState(null);
  function getValidTodo(todo){
   return todo ? (todos.indexOf(todo) > -1) ? alert ('This value is already in the list') : true :  alert ('Write something')
  };
  function getDefaulValue(){
    return setTodo(''), setId(null)
  };
  return(
    <div style={{ margin: '0 auto', maxWidth: '400px' }} >
      <h2>Todos:</h2>
      <ul className='list-group list-group-flush'>
      {todos.length ?
        todos.map((t, idx) => (
          <li key={t} className='list-group-item d-flex justify-content-between align-items-center' onClick = {(e)=> {setTodo(t), setId(idx)}}>
            {++idx}. {t}
            <button className='close' onClick={(e) => remove(t) && e.stopPropagation() }>
              <span >&times;</span>
            </button>
          </li>
        )) :
        <span>Congrats! You did it!</span> 
      
      }
      </ul>
      
      <br />
      <div className='input-group'>
        <input type='text' className='form-control' placeholder='Write something' value={todo} onChange = {(e) => setTodo(e.target.value)} required/>
        <div className='input-group-append'>
        { (!id) ? 
          <button className='btn btn-outline-secondary' onClick={() => getValidTodo(todo) && add(todo) && setTodo('') }>Add</button>:
          <button className='btn btn-outline-secondary' onClick={() => getValidTodo(todo) && edit(todo, id) && getDefaulValue()}>Save</button>
        }
        </div>
      </div>
  
    </div>
  )}

  Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
  }
  

export default Todos
