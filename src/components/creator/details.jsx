import React, { useState } from "react";


const Details = () => {
    let obj = [
        {id: 1, title: 'Title A', remainingItems: 23, timeRemaining: '5 days', totalBuyers: 6},
        {id: 2, title: 'Title B', remainingItems: 2, timeRemaining: '15 days', totalBuyers: 8},
        {id: 3, title: 'Title C', remainingItems: 43, timeRemaining: '55 days', totalBuyers: 5},
        {id: 4, title: 'Title D', remainingItems: 60, timeRemaining: '67 days', totalBuyers: 13},
    ];
    const [prescales, setPresales] = useState(obj);
    const [transactions, setTransactions] = useState([
      {id: 1, name: 'Parth', amount: '$123', date: 'April 19th'},
      {id: 2, name: 'Parth', amount: '$163', date: 'April 19th'},
      {id: 3, name: 'Parth', amount: '$723', date: 'April 19th'},
      {id: 4, name: 'Parth', amount: '$121', date: 'April 19th'},
      {id: 5, name: 'Parth', amount: '$168', date: 'April 19th'},
      {id: 6, name: 'Parth', amount: '$546', date: 'April 19th'},
    ]);

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
        {prescales.map(prescale => 
          <div>
            <h1>{prescale.title} Presale</h1>
            <p>Remaining items: {prescale.remainingItems}</p>
            <p>Time remaining: {prescale.timeRemaining}</p>
            <p>Total buyers: {prescale.totalBuyers}</p>
          </div>
        )}
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>          
      </div>
    );
};

export default Details;