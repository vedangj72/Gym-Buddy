import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/home.css";

export default function Home() {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await fetch("/work"); // Adjust the URL as needed
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Function to navigate to the "/form" page

  return (
    <div className="container">
      <div className="row mt-4">
        <div className=" container m-3">
          <ul className="container m-3" style={{ width: "100%" }}>
            {data &&
              data.map((item) => (
                <li className="workout-item" key={item._id}>
                  <p className="text-success title">Title: {item.title}</p>
                  <p className="reps">Reps: {item.reps}</p>
                  <p className="load">Load: {item.load}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
