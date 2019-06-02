import React from 'react'
import api from '../api/api'
import FilmsList from './FilmsList'
import './Films.css'

class Films extends React.Component {
    state = {
        films: []
    }
    componentDidMount(){
        const response = api.get("/movies").then(response => {
            return this.setState({ films: response.data})
            
        }).catch(err => console.log(err))
        return response
    }

    renderFilms = () => {
        console.log(this.state.films)
        const sortFilms = this.state.films.sort((a, b) => Number(a.episode_id) - Number(b.episode_id))
        return sortFilms.map(film => { 
            return (
                <FilmsList key={film.title} film={film} poster={film.episode_id}/>
                
            )
        })
    }

    render() {
        return (
            <div className="ui container">
                <div className="pageheader">
                    <h1> List of all episodes </h1>
                </div>
                <div className="films">
                    {this.renderFilms()}
                </div>
            </div>
        )
    }
}

export default Films