import React from 'react'
import './App.css';
import Header from './components/Header';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      items: [{
        text: 'First todo name',
        id: uuidv4()
    }, {
        text: 'Second todo name',
        id: uuidv4()
    }],
      text: ''
    }
  }
  handleInput = (e)  =>  {
    this.setState({
      text: e.target.value,

    })
  }
  addItem = (e) => {
    e.preventDefault()
    const newItems = [...this.state.items]
    newItems.push({
      text: this.state.text,
      id: uuidv4()
  })
    this.setState({
      items: newItems,
      text: ''
    })
  }

  render() {
    return (
      <div id='ToDo_input_div'>
        <Header text={this.state.text} handleInput={this.handleInput} addItem={this.addItem}/>
        <List items={this.state.items}/>
      </div>
    )
  }
}

export default App;
