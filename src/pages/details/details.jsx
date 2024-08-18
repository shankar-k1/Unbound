import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./details.css"
import Button from '@mui/material/Button';
import product1 from "../../assets/1.png"
import product2 from "../../assets/2.png";
import product3 from "../../assets/3.png";
import product4 from "../../assets/1.png";

export const Details = (props) => {
  // const [weatherData, setWeatherData] = useState(null);
  // const apiKey = 'L9qbpkO2nIcAKBYYvUYB82bhp84cvChj';
  // const url = `http://dataservice.accuweather.com/locations/v1/countries/ASI?apikey=${apiKey}`;
  const [PRODUCTS, setProducts] = useState([
    {
      id: 1,
      productName: "Iphone 15 Pro Max",
      price: 56000,
      productImage: product1,
      count: 10,
    },
    {
      id: 2,
      productName: "Macbook Pro M3",
      price: 132000,
      productImage: product2,
      count: 5,
    },
    {
      id: 3,
      productName: "Canon EOS 200S",
      price: 56000,
      productImage: product3,
      count: 4,
    },
    {
      id: 4,
      productName: "Iphone 15",
      price: 60000,
      productImage: product4,
      count:20,
    },
    {
      id: 5,
      productName: "Canon EOS mark2",
      price: 90000,
      productImage: product3,
      count:4,
    },
    {
      id: 6,
      productName: "Iphone 15 pro",
      price: 86000,
      productImage: product4,
      count: 8,
    },
]);
  const handleAddToCart = (id) => {
    setProducts((prevProducts) =>
        prevProducts.map((PRODUCTS) => {
            if (PRODUCTS.id === id) {
                // Decrease count only if it's greater than 0
                if (PRODUCTS.count > 0) {
                    return { ...PRODUCTS, count: PRODUCTS.count - 1 };
                }
            }
            return PRODUCTS;
        })
    );
};
//tested using different api called weather api to fetch data using api key
  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setWeatherData(data || []);
  //     } catch (error) {
  //       console.error('Error fetching the weather data:', error);
  //     }
  //   };

  //   fetchWeatherData();
  // }, []);

  const navigate = useNavigate();
  return (
    <div className="detail">
     <div>
      <div>
      <h1>Products Data</h1>
      <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Counts</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((PRODUCTS) => (
              <tr key={PRODUCTS.id}>
                <td>{PRODUCTS.id}</td>
                <td>{PRODUCTS.productName}</td>
                <td>{PRODUCTS.price}</td>
                <td>{PRODUCTS.count}</td>
              <td>
                <Button variant="contained" onClick={() => handleAddToCart(PRODUCTS.id)} disabled={PRODUCTS.count === 0}>
                                  Add to Cart
                </Button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  <div className="Details-btn">
  <Button variant="contained" onClick={() => navigate("/")}> Continue Shopping </Button>
  </div>
  </div>
  );
};

export default Details;