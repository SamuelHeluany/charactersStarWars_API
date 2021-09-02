import React from 'react'
import { useHistory } from 'react-router-dom'


function InitialPage() {
    const history = useHistory()
    
    return (
        <div className="containerInitial">
            <div className="nameProject">
                <h1>Star Wars Characters API</h1>
            </div>
            <div className="buttonCharacter">
                <button onClick={() => {
                    history.push('/characters')
                }}>Show Characters Info</button>
            </div>
        </div>

    )
}

export default InitialPage
