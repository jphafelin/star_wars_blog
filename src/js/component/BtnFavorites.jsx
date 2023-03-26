import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const BtnFavorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Favorites  
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
          {store.favorites.length}
        </span>
      </button>
        <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
          {store.favorites.length === 0 ? (
              <li><span className="dropdown-item">No favorites selected</span></li>
          ) : (
            store.favorites.map((item) => (
              <li key={item.id} className="d-flex align-items-center">
                <span className="dropdown-item">{item.type}: {item.name}</span>
                <button type="button" className="btn btn-outline-danger"
                  onClick={() => actions.removeFavorite(item, store.favorites)}>
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            ))
          )}
        </ul>
    </div>
  );
};
