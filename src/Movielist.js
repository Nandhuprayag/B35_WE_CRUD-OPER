import { useEffect, useState } from 'react';
import { API } from './global';
import { Movie } from './Movie';

export function Movielist() {
  const [movielist, setMovielist] = useState([]);
  
   const getMovies=()=>
   {
    fetch(`${API}/movies`,
    {
      method: 'get',
    })
    .then((response) => response.json())
    .then(data => {
      setMovielist(data);
     });
   }
    
   useEffect(()=>getMovies(),[])
  return (
    <div style={{margin:'5em'}} className='movielist-style'>
        {movielist.map((mv, index)=> (
          <Movie movie={mv} key={index} id={mv.id}/>
        ))}

    </div>
  );
}


