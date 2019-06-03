import React from 'react'
import api from '../api/api'
import FilmCard from './FilmCard'
// import './Films.css'

class Films extends React.Component {
    state = {
        films: [],
        selectedFilms: null
    }
    componentDidMount(){
        const response = api.get("/movies").then(response => {
            return this.setState({ films: response.data})
            
        }).catch(err => console.log(err))
        return response
    }

    renderFilms = () => {
        //console.log(this.state.films)
        const sortFilms = this.state.films.sort((a, b) => Number(a.episode_id) - Number(b.episode_id))
        return sortFilms.map(film => { 
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
                <div className="renderCard">
                    {this.renderFilms()}
                </div>
            </div>
        )
    }
}

export default Films