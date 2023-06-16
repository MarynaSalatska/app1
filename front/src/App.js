import { useEffect, useState } from "react";
import "./App.css";
import fetchData from "./api/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error setting data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">Superheroes</header>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              NickName : {item.nickname} - Image:
              <img
                src={item.image_src}
                alt={item.nickname}
                width={200}
                // height={100}
              />
              {/* <a href="https://www.imagevenue.com/ME16HX7Z" target="_blank"> 
                <img 
                  src="https://cdn-thumbs.imagevenue.com/79/58/80/ME16HX7Z_t.jpg" 
                  alt="superman.jpg" 
                /> 
              </a> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;
