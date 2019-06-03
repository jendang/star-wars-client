import React from 'react'
import CharacterRender from './CharacterRender'
import api from '../api/api'


const applyUpdateResult = (result) => (prevState) => ({
    characters: [...prevState.characters, ...result.characters],
    page: result.pageData.page,
    page_count: result.pageData.page_count
    
  });
  
const applySetResult = (result) => (prevState) => ({
    characters: result.characters,
    page: result.pageData.page,
    page_count: result.pageData.page_count
  });
  
const getCharacters = (value, page) => {
    return api.get(`/movies/search?title=${value}&page=${page}`)
}
    

class Characters extends React.Component {
    state = {
        characters: [],
        page: 1,
        page_count: 1
    }

    fetchCharacters = (page) => {
        const { title } = this.props.match.params
        return getCharacters(title,page)
        .then(response => {
            console.log(response.data)
            return response.data 

        })
        .then(result =>  this.onSetResult(result, page))
    }

    onSetResult = (result, page) => 
        page === 1
          ? this.setState(applySetResult(result))
          : this.setState(applyUpdateResult(result));
    
    componentDidMount() {
        const { page } = this.state
        this.fetchCharacters(page)    
    }

    onPaginatedNext = () => {
       let { page } = this.state
        this.fetchCharacters(page + 1)
    }

    onPaginatedPrevious = () => {
        let { page } = this.state
        if(page <= 1 ){
            this.fetchCharacters(1)
        } else {
            this.fetchCharacters(page - 1)
            
        }
    }
    

    render() {
        console.log(this.state)
        const { characters, page } = this.state
        return (
            <div className="ui container">
                <div className="pageHeader">
                    <h1>{this.props.match.params.title}</h1>
                </div>
                <div>
                    <button onClick={this.onPaginatedNext}>Next</button>
                    <p>Page: {this.state.page}</p>
                    <p>Total of pages: {this.state.page_count}</p>
                    <button onClick={this.onPaginatedPrevious}>Previous</button>
                </div>
                <CharacterRender
                    characters={characters}
                    page={page}
                />
            </div>
        )
    }
}

export default Characters