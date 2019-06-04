import React from 'react'
import api from '../api/api'
import FilmCard from './FilmCard'
import Loader from '../Loader/Loader'

class Films extends React.Component {
    state = {
        films: [],
        isLoading: false
    }
    componentDidMount(){
        this.setState({ isLoading: true })
        const response = api.get("/movies")
        .then(response => {
            return this.setState({ films: response.data, isLoading: false })
            
        }).catch(err => console.log(err))
        return response
    }

    renderFilms = () => {
        return this.state.films.map(film => { 
            return (
                <FilmCard 
                    key={film.title} 
                    film={film} 
                    poster={film.episode_id}/>
            )
        })
    }

    render() {
        return (
            <div className="ui container">
                <div className="pageHeader">
                    <h1> List of all episodes </h1>
                </div>
                { this.state.isLoading ? <Loader />
                :
                <div className="renderCard">
                    {this.renderFilms()}
                </div>
                }
            </div>
        )
    }
}

export default Films