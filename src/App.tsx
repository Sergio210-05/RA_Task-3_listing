import './App.css'
import { Listing } from './components/Listing'
import ListingType from './types/ListingType'
import data from './data/data'

function App() {
  const goods: ListingType[] = data.filter(item => item.state !== "removed")
  .map((item) => {
    if (item.state == "active") {
      console.log(item.state)
      return({
        listing_id: item['listing_id'],
        url: item['url'],
        MainImage: {url_570xN: item.MainImage?.url_570xN},
        title: item['title'],
        currency_code: item['currency_code'],
        price: item['price'],
        quantity: item['quantity'],
      })
    }
  })
  
  

  return (
    <>
      <Listing data={goods}/>
    </>
  )
}

export default App
