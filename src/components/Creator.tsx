import Card from './Card.tsx';

interface CreatorProps {
  name: string,
  url?: string,
  description?: string,
  imageURL: string
}

const Creator = ({ name, url, description, imageURL}: CreatorProps) => {
  return (
    <Card 
      imageURL={imageURL}
      heading={name}
      description={description}
      url={url}
    />
  )
}

export default Creator