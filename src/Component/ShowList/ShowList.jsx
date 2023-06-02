import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import { useLoaderData } from 'react-router-dom';

const ShowList = () => {

    const myCuteData=useLoaderData()
    console.log(myCuteData);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      }, []);

  return (
    <div className="show-list">
    <div className='row justify-content-center items-center'>
    {shows.map(show =><SingleData show={show} key={show.show.id} ></SingleData> )}
    </div>
    </div>
  );
};

export default ShowList;
