import React , {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import './App.css'
import BookList from './BookList'
import SearchBook from './SearchBook'

class BooksApp extends Component {
  state = {
    books:[]

  }

      componentDidMount() {
      BooksAPI.getAll().then((books)=>{
        this.setState({books})

    })
  }
  change=(value,book) => {

  BooksAPI.update(book,value).then(()=> {
    book.shelf=value
    this.setState(state=>({
      books:state.books.filter((b)=> b.id!==book.id).concat([book])

    })
    )
  })
  }


  render() {
    return (
      <div className="app">

        <Route exact path='/' render={ () => (

          <BookList books={this.state.books} change={this.change}/>
        )
        }
        />
        <Route path='/search' render= { () => (
          <SearchBook books={this.state.books} change={this.change} handleSearch={this.handleSearch} > </SearchBook>
        )
        }
        />
      </div>
    )
  }
}

export default BooksApp
