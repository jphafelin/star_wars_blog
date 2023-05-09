import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";


export const StarshipsDetails = () => {
  const { store, actions } = useContext(Context);
  const selectStarship = store.selectStarship;
  const urlImage = selectStarship.urlImage;
  const handleOnErrorImg = (e) => {
      e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  if (!selectStarship.id) { 
    return (<Navigate to="/starships"/>)
  } else {
    return (
      <div className="container bg-dark">
        <div className="card mb-3  bg-dark text-light">
          <div className="row g-0">
              <div className="col-md-7 col-lg-6 col-xl-5">
                  <img className="img-fluid rounded-start" src={urlImage} onError={handleOnErrorImg}></img>
              </div>
              <div className="col-md-5 col-lg-6 col-xl-7">
                  <div className="card-body">
                      <h1>{selectStarship.item.name}</h1>
                      <p> </p>
                      
                      <p><strong>Model: </strong>{selectStarship.item.model}</p>
                      <p><strong>Length: </strong>{selectStarship.item.length}</p>
                      <p><strong>Manufacturer: </strong>{selectStarship.item.manufacturer}</p>
                      <p><strong>Passengers: </strong>{selectStarship.item.passengers}</p>
                      <p><strong>Consumables: </strong>{selectStarship.item.consumables}</p>
                      
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}