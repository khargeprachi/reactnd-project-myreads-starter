import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

ReactDOM.render(<BrowserRouter component={BooksApp}><BooksApp /></BrowserRouter>,
   document.getElementById('root'))
