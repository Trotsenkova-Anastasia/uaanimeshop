import React from "react";
import search from '../../../images/search.png'
import  './header_midle.css'
function Search()
{
    return(
        <>
        <div className="searchMain">
        <input
            type="text"
            placeholder="Search..."
        />
        <button className="searchBtn"><img className="searchImg" src={search}/></button>
        </div>
        </>
    )
}
export default Search;