import React from 'react'
// import './FilmsList.css'

const FilmsList = ({ film, poster }) => {


    return (
        <div className="ui card">
            <div className="image">
                <img 
                    src={ require(`../../Assets/episodio${poster}.jpg`) } 
                    alt={`Episode${poster} poster`} 
                    style={{maxWidth: "500px", maxHeight:"300px"}}
                />
            </div>
            <div className="content">
                <div className="header">
                    {film.title}
                </div>
                <div className="meta">
                    Episode: {film.episode_id}
                </div>
            </div>
        </div>
    )
}

export default FilmsList