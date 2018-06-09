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
  BooksAPI.update(book,value).then((back)=> {{console.log(back)}
    book.shelf=value
    this.setState(state=>({
      books:state.books.filter((b)=> b.id!==book.id).concat([book]),
      showBooks:state.showBooks.filter((b)=> b.id!==book.id).concat([book])
    })
    )
  })
  }
  /*
  handleSearch = (event) => {
       let query = event.target.value;

       if (query.length > 0) {
           BooksAPI.search(query).then((queryBooks) => {
               if (queryBooks instanceof Array) {

                   this.setState({
                       showBooks: queryBooks.sort(sortBy('title'))
                   });
               } else {
                   this.setState({
                      showBooks: []
                   });
               }
               {console.log(this.state.showBooks)}
           }).catch(()=> {console.log("error")});
       } else {
           this.setState({
               showBooks: []
           });
       }
   }*/
   handleSearch = (event) => {
        let query = event.target.value;

        if (query.length > 0) {
            BooksAPI.search(query).then((queryBooks) => {
                if (queryBooks instanceof Array) {
                  queryBooks.forEach((book,index)=>{
                    BooksAPI.get(book.id).then((b)=>{
                      queryBooks[index]=b
                    })
                  })
                  {console.log(queryBooks)}
                    this.setState({
                        showBooks: queryBooks.sort(sortBy('title'))

                    });
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
