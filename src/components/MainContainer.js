import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const DATA = "http://localhost:3001/stocks"

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myPortfolio, setMyPortfolio] = useState([])
  const [filterBy, setFilterBy] = useState("Tech")
  const [sortBy, setSortBy] = useState("Alphabetically")
  
  useEffect(() => {
    fetch(DATA)
    .then(response => response.json())
    .then(data => setStocks(data))

  }, [])
  //click stock and add to myportfolio
  //click stock in myportfolio and remove

  function addStockToMyPortfolio(stock) {
    //if id in portfolio remove that stock
    //if id not in portfolio add that stock
    setMyPortfolio([...myPortfolio, stock])
    //console.log(myPortfolio)
  }

  function removeStockFromMyPortfolio(s) {
    const stocksToKeep = myPortfolio.filter((stock) => {
      return stock.id !== s.id
    })
    setMyPortfolio(stocksToKeep)
  }
  
  const newArray = [...stocks]
  const sortedStocks = newArray.sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.name - b.name
    } else {
      return a.price - b.price
    }
  });

  const filterStock = sortedStocks.filter((stock) => {
    return stock.type === filterBy
  })

  

    
 



  return (
    <div>
      <SearchBar sortBy={sortBy} filterBy={filterBy} setSortBy={setSortBy} setFilterBy={setFilterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filterStock} addStockToMyPortfolio={addStockToMyPortfolio} myPortfolio={myPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer myPortfolio={myPortfolio} removeStockFromMyPortfolio={removeStockFromMyPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
