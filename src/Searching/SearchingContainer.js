import React, { Component } from 'react'
import axios from 'axios';
import Searching from './Searching';


class SearchingContainer extends Component {
    state={isLoading:true,isEmptyQuery:false,searching:false}
  Searching(SearchingQuery){
    if(SearchingQuery.trim()!==""){
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=fNELGuXfFIxih8UBq9o3w&q=${SearchingQuery}`,{
      params:{
        key:'fNELGuXfFIxih8UBq9o3w',
        q:SearchingQuery
      }
    }).then((response)=>{
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(response.data,"text/xml");
    var results =xmlDoc.querySelector('results')
    var works=results.querySelectorAll('work')
    var books=[];
    works.forEach(w=>{
        books.push({id:w.querySelector('best_book').querySelector('id').childNodes[0].nodeValue,
        title:w.querySelector('best_book').querySelector('title').childNodes[0].nodeValue,
        author:w.querySelector('best_book').querySelector('author').querySelector('name').childNodes[0].nodeValue,
        imageUrl:w.querySelector('best_book').querySelector('image_url').childNodes[0].nodeValue, 
      state:""})})
    this.setState({books:books,isLoading:false})
    }
    ).catch((error)=>console.log(error))
  }else{
    this.setState({isEmptyQuery:true})
  }
}
startedSearching(){
  this.setState({searching:!this.state.searching})
}
resetSearch(){
  this.setState({searching:false,isLoading:true,isEmptyQuery:false})
}
    render () {
        return (
            <div>
              <Searching resetSearch={this.resetSearch.bind(this)} searching={this.state.searching} startedSeraching={this.startedSearching.bind(this)}
              books={this.state.books} isEmptyQuery={this.isEmptyQuery} isLoading={this.state.isLoading} Searching={this.Searching.bind(this)}/>
            </div>
        )
    }
}

export default SearchingContainer;
