import React, { useState } from "react";


const Available = () => {
    let obj = [
        {id: 1, title: 'Title A', desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.', claimed: false},
        {id: 2, title: 'Title B', desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.', claimed: false},
        {id: 3, title: 'Title C', desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.', claimed: false},
        {id: 4, title: 'Title D', desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.', claimed: false},
    ];
    const [presales, setPresales] = useState(obj);

    const handleClaim = async (presaleId, userId) => {
        setPresales(prevPresales => {
          return prevPresales.map(presale => {
            if (presale.id === presaleId) {
              return { ...presale, claimed: true };
            } else {
              return presale;
            }
          });
        });
    };
    return (
                <div>
                <h1>NFT Presales</h1>
                <ul>
                  {presales.map(presale => (
                    <li key={presale.id}>
                      <h2>{presale.title}</h2>
                      <p>{presale.desc}</p>
                      {presale.claimed ? (
                        <p>Claimed</p>
                      ) : (
                        <button onClick={() => handleClaim(presale.id, 'user123')}>Claim</button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
    );
};

export default Available;