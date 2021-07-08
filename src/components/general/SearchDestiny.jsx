import React from "react";
import { Link } from "react-router-dom";

class SearchDestiny extends React.Component {
  render() {
    return (
      <div>
        <div class="search-boxxx">
          <input
            class="search-txt"
            type="text"
            name=""
            placeholder="Busca tu destino"
          />
          <Link class="search-btn">
            <i class="fas fa-search"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchDestiny;
