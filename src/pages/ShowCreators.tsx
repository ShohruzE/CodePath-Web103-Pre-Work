import { useEffect, useState } from 'react';
import { supabase } from '../client.ts';

import { NavLink } from 'react-router-dom';

const ShowCreators = () => {

  const [creators, setCreators] = useState<any[] | null>([]);

  const showCreators = async () => {
    let { data, error } = await
      supabase
        .from('creators')
        .select('*')
    if (error) {
      console.error('Error:', error)
    }
    setCreators(data)
  };

  useEffect(() => {
    showCreators();
  }, []);

  return (
    //<div className='container'>
      <div className="container">
        <h2>Gallery</h2>
        {
          (creators && creators.length > 0) ?
            (creators.map((creator) => (
              <article className='card'>
                <header>
                  <figure>
                    <img src={creator.imageURL} alt={creator.description}/>
                  </figure>
                </header>
                <h3>{creator.name}</h3>
                <NavLink to={`/view-creator/${creator.id}`} state={creator} role='button' className="contrast">View More</NavLink>
            </article>
            )))
            :
            (
              <h2>You have not created any Creators!</h2>
            )
        }
      </div>
    //</div>
  )
}

export default ShowCreators