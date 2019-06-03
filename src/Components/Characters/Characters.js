import React from 'react'
import CharacterCard from './CharacterCard'
import api from '../api/api'


const applyUpdateResult = (result) => (prevState) => ({
    characters: [...prevState.characters, ...result.characters],
    page: result.pageData.page,
    page_count: result.pageData.page_count
    
})
  
const applySetResult = (result) => (prevState) => ({
    characters: result.characters,
    page: result.pageData.page,
    page_count: result.pageData.page_count
})
  
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

    renderCharacters = () => {
        const { page, characters } = this.state
        if(page === 1){
            return characters.map(character => {
                return <CharacterCard key={character.url} character={character} />
            })

        } else {
            return characters.slice(30*(page - 1), 30 * page).map(character => {
                    return <CharacterCard key={character.url} character={character} />
            })
        }
    }
    

    render() {
        console.log(this.state)
        //const { characters, page } = this.state
        return (
            <div className="ui container">
                <div className="pageHeader">
                    <h1>List of characters from {this.props.match.params.title} film</h1>
                    <p>Page: {this.state.page}</p>
                    <p>Total of pages: {this.state.page_count}</p>
                    <div>
                        <button className="ui animated button" onClick={this.onPaginatedPrevious}>
                            <div class="visible content">Previous</div>
                            <div class="hidden content">
                                <i class="left arrow icon"></i>
                            </div>
                        </button>
                        <button className="ui animated button" onClick={this.onPaginatedNext}>
                            <div class="visible content">Next</div>
                            <div class="hidden content">
                                <i class="right arrow icon"></i>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="renderCard">
                    {this.renderCharacters()}
                </div>
            </div>
        )
    }
}

export default Characters