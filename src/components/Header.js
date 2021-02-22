import React from 'react'

class Header extends React.Component {
  
  render() {
    const {text, handleInput, addItem} = this.props

    return (
        <header>
          <form id='ToDo_Text' onSubmit = {addItem}>
            <input type='text' placeholder='Enter text' value = {text} onChange = {handleInput}></input>
            <button type='submit'>Add</button>
          </form>
        </header>
    )
  }
}

export default Header