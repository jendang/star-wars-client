import React from 'react'
import CharacterCard from './CharacterCard';

class CharacterRender extends React.Component {
    render(){
        const { characters, page } = this.props

        return (
            <div className="renderCard">
                {/* {
                    characters.map(character => {
                        return <CharacterCard key={character.url} character={character} />
                    })
                } */}
                {page === 1 
                ?   characters.map(character => {
                        return <CharacterCard key={character.url} character={character} />
                    })

                :   characters.slice(30*(page - 1), 30 * page).map(character => {
                        return <CharacterCard key={character.url} character={character} />
                    })
                } 
            </div>
        )
        
    }

}

export default CharacterRender