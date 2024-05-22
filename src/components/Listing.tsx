import ListingType from "../types/ListingType"

export const Listing = (props: {data: ListingType[]}) => {
  const data = props.data

  function currencySymbol(currencyCode: string, price: string): string {
    if (currencyCode=='USD') {
      return '$' + price
    }
    if (currencyCode=='EUR') {
      return '€' + price
    }
    return price + ' ' + currencyCode
  }

  function quantityLevel(quantity: number): string {
    if (quantity <= 10) {
      return "level-low"
    }
    if (quantity <= 20) {
      return "level-medium"
    }
    return "level-high"
  }
  
  return (
    <div className="item-list">
      {data.map(item => {
        const currencyPrice = currencySymbol(item['currency_code'], item['price'])
        const balance = quantityLevel(item['quantity'])

        return(
          <div className="item" key={item['listing_id']}>
            <div className="item-image">
            <a href={item['url']}>
            <img src={item['MainImage']['url_570xN']}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item['title']}</p>
            <p className="item-price">{currencyPrice}</p>
            {/* <p className="item-quantity "+{balance}>{item['quantity']}</p> */}
            <p className={`item-quantity ${balance}`}>{item['quantity']}</p>
          </div>
        </div>
        )}
      )}
    </div>
  )
}
