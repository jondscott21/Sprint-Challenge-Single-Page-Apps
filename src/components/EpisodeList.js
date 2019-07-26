import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(res => {
      console.log(res.data.results);
      setEpisodes(res.data.results)
    })
    .catch(error => console.log('Erorr:', error))
  }, [])

  return <section className='character-list grid-view'>

      {episodes.map(episode => <EpisodeCard key={episode.id} episode={episode} />)}
    </section>

}