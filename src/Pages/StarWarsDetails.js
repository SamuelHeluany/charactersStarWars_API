import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function StarWarsDetails() {
    const [character, setCharacter] = useState([])
    const history = useHistory()

    const characterDetails = async () => {
      const result = await axios.get('https://swapi.dev/api/people')
      setCharacter(result.data.results)
    }
  
    useEffect(() => {
      characterDetails()
    },[])
  
    return (
      <>
      <div className="containerPreDetails">
        {character.map((details) => {
          return(
            <div className="containerDetails">
              <div className="detailsCharacters">
                <h2>Name: {details.name}</h2>
                <h4>Height: {details.height}cm</h4>
                <h4>Gender: {details.gender}</h4>
              </div>
            </div>
                ) 
            })}         
        </div>
        <div className="buttonCharacterDetails">
              <button onClick={() => {
                  history.goBack()
              }}
              >Back</button>
            </div>
    </>       
    )
}

export default StarWarsDetails
