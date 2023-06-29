import { NavLink, useLocation, useParams } from 'react-router-dom';

import Creator from '../components/Creator.tsx';


const ViewCreator = () => {

  const { id } = useParams();
  const location = useLocation();
  const creator = location.state;
  // use react router loader instead of location
  console.log(id)

  return (
    <>
      <Creator 
        name={creator.name}
        description={creator.description}
        imageURL={creator.imageURL}
        url={creator.url}
      />

      <div className="container grid">
        <NavLink to={`/view-creator/${id}/edit`} state={creator} role="button" className="secondary">Edit</NavLink>
        <NavLink to={`/view-creator/${id}/delete`} state={creator} role="button" className="secondary outline">Delete</NavLink>
      </div>

    </>

  )
}

export default ViewCreator