import React, { useState } from "react";

export const New = ({ item }) => {
  const [liked, setLiked] = useState(false);
  return (
    <li className="list">
      <div className="container " style={{ marginTop: "50px" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-0 d-flex justify-content-center">
            <div className="card-sl ">
              <div className="card-image d-flex justify-content-center">
                <img src={item.Img} alt={item.Title} />
              </div>

              <div
                className={liked ? "card-click" : "card-action"}
                onClick={() => setLiked(!liked)}
              >
                <i className="fa fa-heart"></i>
              </div>
              <div className="card-heading">{item.Title}</div>
              <div className="card-text">{item.Description}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
