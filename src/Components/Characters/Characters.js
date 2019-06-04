import React from 'react'
import CharacterCard from './CharacterCard'
import api from '../api/api'
import './Characters.css'
import Loader from '../Loader/Loader'

const applyUpdateResult = (result) => (prevState) => ({
    characters: [...prevState.characters, ...result.characters],
    page: result.pageData.page,
    page_count: result.pageData.page_count,
    isLoading: false
    
})
  
const applySetResult = (result) => (prevState) => ({
    characters: result.characters,
    page: result.pageData.page,
    page_count: result.pageData.page_count,
    isLoading: false
})
  
const getCharacters = (value, page) => {
    return api.get(`/movies/search?title=${value}&page=${page}`)
}
    

class Characters extends React.Component {
    state = {
        characters: [],
        page: 1,
        page_count: 1,
        isLoading: false
    }

    fetchCharacters = (page) => {
        const { title } = this.props.match.params
        this.setState({ isLoading: true })
        return getCharacters(title,page)
        .then(response => {
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
        const { page, page_count, isLoading, characters } = this.state
        return (
            // <div className="ui container">
                <div>
                    <div className="pageHeader">
                        <h1>List of characters from {this.props.match.params.title} film</h1>
                        <p>Page: {page}</p>
                        <p>Total of pages: {page_count}</p>
                        {page_count > 1
                        ? 
                            <div>
                                <button className="ui button" onClick={this.onPaginatedPrevious}>
                                    Previous
                                </button>
                                <button className="ui button" onClick={this.onPaginatedNext}>
                                    Next
                                </button>
                            </div>
                        :
                            null
                            // <p>Total of pages: 1</p>
                        }
                    </div>

                    { isLoading
                    ?   
                        <Loader />
                        
                    : 
                       
                        <div className="renderCard">
                            {this.renderCharacters()}
                        </div>
                       
                    }
                </div>
            // </div>
        )
    }
}

export default Characters