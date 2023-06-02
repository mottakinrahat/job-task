import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      
  }, []);
 console.log(shows);
  return (
    <div className="show-list">
      <h2>Show List</h2>
    <div className='row justify-content-center items-center'>
    {shows.map(show =><SingleData show={show} key={show.show.id} ></SingleData> )}
    </div>
    </div>
  );
};

export default ShowList;
