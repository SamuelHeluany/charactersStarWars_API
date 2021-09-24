import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import InitialPage from './InitialPage'

function StarWarsDetails() {
  const [character, setCharacter] = useState([])
  const history = useHistory()
  const [page, setPage] = useState(1)

  const characterDetails = async () => {
    const result = await axios.get('https://swapi.dev/api/people/?page=' + page)
    setCharacter(result.data.results)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    if (page >= 2) {
      setPage(page - 1)
    }
  }
  useEffect(() => {
    characterDetails()
  }, [page])

  return (
    <>
      <div className="nameProject">
        <h1>Star Wars Characters</h1>
      </div>
      <div className="containerPreDetails">
        {character.map((details) => {
          return (
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
        {page >= 2 ? (
          <div className="btns">
            <button className="prevbtn" onClick={previousPage}>Previous Page</button>
            <button className="initbtn" onClick={() => {
              history.goBack()
            }}
            >Initial Page</button>
            <button className="morebtn" onClick={nextPage}>Next Page</button>
          </div>
        ) : (
          <div className="btns">
            <button className="initbtn" onClick={() => {
              history.goBack()
            }}
            >Initial Page</button>
            <button className="morebtn" onClick={nextPage}>Next Page</button>
          </div>
        )}
      </div>
    </>
  )
}

export default StarWarsDetails
