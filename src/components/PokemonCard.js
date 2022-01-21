import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {

  const [showFront, setShowFront] = useState(false)

  function handleFlipCard(){
    setShowFront(!showFront)
  }

  return (
    <Card onClick={handleFlipCard}>
      <div>
        {showFront ? (<div className="image">
                        <img alt="oh no!" src={poke.sprites.back}/>
                      </div>)
                    : (<div className="image">
                        <img alt="oh no!" src={poke.sprites.front}/>
                      </div>)}
        
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}
export default PokemonCard;
