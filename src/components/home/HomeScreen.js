import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { News } from "../../const/News";
import { New } from "../new/New";
import "./HomeScreen.css";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  const searchText = () => {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };

  const listItems = News.map((item, i) => <New key={i} item={item} />);

  return (
    <div className="asd">
      <div className="home"></div>
      <div className="formulario1">
        <button onClick={handleLogout}>{"<"}</button>
        <div className="d-flex justify-content-center">
          <h3 className="title-Sessionn d-flex justify-content-center">
            Noticias y eventos de ciudad
          </h3>
        </div>
        <div className="formulario card-body">
          <div className="form-group row justify-content-center ">
            <input
              className="form-control"
              type="text"
              id="myInput"
              onKeyUp={searchText}
              placeholder="Digita una palabra..."
            />
          </div>
          <ul id="myUL">{listItems}</ul>
        </div>
      </div>
    </div>
  );
};
