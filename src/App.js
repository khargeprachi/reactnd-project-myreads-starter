import React , {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import sortBy from 'sort-by'
import './App.css'
import BookList from './BookList'
import SearchBook from './SearchBook'

class BooksApp extends Component {
  state = {
    books:[],
    query:'',
    showBooks:[]

  }

      componentDidMount() {
      BooksAPI.getAll().then((books)=>{
        this.setState({books})

    })
  }
  updateQuery=(query)=>{

  this.setState({query:query})

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
  handleSearch=(query)=> {
  if(query) {
    BooksAPI.search(query).then((searchResult)=> {
      console.log(searchResult)
      if(searchResult) {
        this.setState({showBooks:searchResult.sort(sortBy('title'))})
  }

  }).catch(()=> this.setState({showBooks:[]}))
  }
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
          <SearchBook books={this.state.books} handleSearch={this.handleSearch} showBooks={this.state.showBooks} query={this.state.query} updateQuery={this.updateQuery} change={this.change} handleSearch={this.handleSearch} > </SearchBook>
        )
        }
        />
      </div>
    )
  }
}

export default BooksApp
