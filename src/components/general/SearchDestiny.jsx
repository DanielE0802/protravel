import React from "react";

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
          <a href="#" class="search-btn">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default SearchDestiny;
