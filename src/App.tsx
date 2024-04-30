import Products from "./components/Products"
import ProductsList from "./components/ProductsList"

function App() {
  

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-4xl text-center md:w-2/3 md:mx-auto">
          Pablo Nuñez {''}
          <span className="text-orange-600">ECOMMERCE</span>
        </h1>
        <div>
          <Products/>
        </div>
        <div>
          <ProductsList/>
        </div>
      </div>
    </>
  )
}

export default App
