import React , {Component} from 'react'
 import * as BooksAPI from './BooksAPI.js'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import BookList from './BookList'
import SearchBook from './SearchBook'

class BooksApp extends Component {
  state = {
    books:[]
  }

      componentDidMount() {
      BooksAPI.getAll().then((books)=>{
    /*  books.forEach((book)=> (
        book.shelf:'currently reading'
      ))
*/      this.setState({books:books})

    })
  }
  change=(value,book) => {

  BooksAPI.update(book,value).then(()=> {
    book.shelf=value
    this.setState(state=>({
      books:state.books.filter((b)=> b.id!=book.id).concat([book])

    })
    )

//console.log(book)
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
          <SearchBook books={this.state.books} change={this.change}> </SearchBook>
        )
        }
        />
      </div>
    )
  }
}

export default BooksApp
