import { useLocation, useParams } from 'react-router-dom';
import { supabase } from '../client.ts'
import { useState } from 'react';

type Creator = {
  name: string
  description: string
  imageURL?: string
  url: string
}

const EditCreator = () => {

  const { id } = useParams();
  const numericId = parseInt(id ?? "");
  const location = useLocation();
  const creatorState = location.state;

  const [creator, setCreator] = useState<Creator>({
    name: creatorState?.name ?? "",
    description: creatorState?.description ?? "",
    imageURL: creatorState?.imageURL ?? "",
    url: creatorState?.url ?? "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log("Name:", name, "Value:", value);
    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateCreator = async () => {

    console.log("Update creator called");
    console.log("Creator:", creator);

    const { data, error } = await supabase.from("creators")
      .update({
        name: creator.name,
        description: creator.description,
        imageURL: creator.imageURL,
        url: creator.url
      })
      .eq("id", numericId);

    if (error) {
      console.error(error)
    }
    console.log(data)
  };


  return (
    <div className="EditCreator container">
      <h2>Edit Creator</h2>
      <form>

        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" value={creator.name} placeholder="Name" onChange={handleChange} required/>
        </label>

        <label htmlFor="description">
          Description:
          <input type="text" id="description" name="description" value={creator.description}placeholder="Enter some info about your creator" onChange={handleChange} required/>
        </label>

        <label htmlFor="url">
          Social Link:
          <input type="text" id="url" name="url" value={creator.url} placeholder="Enter a social media platform the creator is on" onChange={handleChange} required/>
        </label>

        <label htmlFor="imageURL">
          Image URL:
          <input type="text" id="imageURL" name="imageURL" value={creator.imageURL} placeholder="Enter the url for the image of the creator" onChange={handleChange}/>
        </label>

        <input className="submit" type='submit' value='Submit' onClick={updateCreator} />
      </form>
    </div>
  )
}

export default EditCreator