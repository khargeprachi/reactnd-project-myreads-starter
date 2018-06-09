import React , {Component} from 'react'
import {Route} from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI.js'
import './App.css'
import BookList from './BookList'
import SearchBook from './SearchBook'

class BooksApp extends Component {
  state = {
    books:[],
    showBooks:[]
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
      books:state.books.filter((b)=> b.id!==book.id).concat([book]),
      showBooks:state.showBooks.filter((b)=> b.id!==book.id).concat([book])
    })
    )
  })
  }

handleSearch = (event) => {
     let query = event.target.value;

     if (query.length > 0) {
         BooksAPI.search(query).then((queryBooks) => {let final1,final2
             if (queryBooks instanceof Array) {

                 BooksAPI.getAll().then((allBooks)=>{
                   final1=allBooks.filter((book)=>

                    (queryBooks.find(k => k.id===book.id))
                  )
                  final2=queryBooks.filter((book)=> (
                    (!allBooks.find(k => k.id===book.id))
                  ))
                  final2.forEach((book)=>{book.shelf="none"})


                   this.setState({
                     showBooks: final1.concat(final2).sort(sortBy('title'))

                   });
                 })

             } else {
                 this.setState({
                    showBooks: []
                 });
             }
         }).catch(()=> {console.log("error")});
     } else {
         this.setState({
             showBooks: []
         });
     }
 }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ () => (
          <BookList books={this.state.books} change={this.change} handleSearch={this.handleSearch}/>
        )
        }
        />
        <Route path='/search' render= { () => (
          <SearchBook  handleSearch={this.handleSearch} showBooks={this.state.showBooks}   change={this.change}  > </SearchBook>
        )
        }
        />
      </div>
    )
  }
}

export default BooksApp
