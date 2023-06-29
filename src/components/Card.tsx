import { NavLink, useLocation, useParams } from "react-router-dom"


interface CardProps {
  imageURL: string,
  heading: string,
  description?: string,
  url?: string
}

const Card = ({imageURL, heading, description, url}: CardProps) => {

  const { id } = useParams();
  const location = useLocation();
  const creator = location.state;

  return (
    <article className='card'>
      <header>
        <figure>
          <img src={imageURL} alt={description}/>
        </figure>
      </header>
      <h3>{heading}</h3>
      {
        (description) ?
        (<p>{description}</p>)
        :
        (<></>)
      }
      {
        (url) ?
        (<a href={url} target="_blank">Social</a>)
        :
        (<></>)
      }
    </article>
  )
}

export default Card