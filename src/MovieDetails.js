import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from './global';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



export function MovieDetails() 
{
 const [movie,setMovie]=useState({})

  const { id } = useParams();
  
  useEffect(()=>
  {
    fetch(`${API}/movies/${id}`,
    {
      method:'GET',
    })
    .then(response => response.json())
    .then((data)=> {
      console.log(data)
      setMovie(data)
    })
  },[])  



  return (
    <div className='moviedetail-style'>
      <iframe style={{width:"1000",height:"361" }} src={movie.trailer}></iframe>
      <div className='movie-spec'>
      <h3 className="movie-name">{movie.name}</h3>
      <p > ⭐{movie.rating}</p>
      </div>
      <p>{movie.summary}</p>
      <div>
      <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />}>
   BACK
</Button>
      </div>
    </div>
  );
}
