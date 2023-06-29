import { useState } from 'react'
import { supabase } from '../client.ts'

type Creator = {
  name: string
  description: string
  imageURL?: string
  url: string
}

const AddCreator = () => {

  const [creator, setCreator] = useState<Creator>({
    name: "",
    description: "",
    imageURL: "",
    url: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    console.log("Name:", name, "Value:", value);
    setCreator( (prev) => {
        return {
            ...prev,
            [name]: value
        }
    })
    console.log(creator);
};

  const createCreator = async () => {
    const { data, error } = await supabase.from("creators")
      .insert([{
        name: creator.name,
        description: creator.description,
        imageURL: creator.imageURL,
        url: creator.url
      }]);
      if (error) {
        console.error(error)
      }
      console.log(data)
  }

  return (
    <div className="AddCreator container">
      <h2>Add Creator</h2>
      <form>

        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} required/>
        </label>

        <label htmlFor="description">
          Description:
          <input type="text" id="description" name="description" placeholder="Enter some info about your creator" onChange={handleChange} required/>
        </label>

        <label htmlFor="url">
          Social Link:
          <input type="text" id="url" name="url" placeholder="Enter a social media platform the creator is on" onChange={handleChange} required/>
        </label>

        <label htmlFor="imageURL">
          Image URL:
          <input type="text" id="imageURL" name="imageURL" placeholder="Enter the url for the image of the creator" onChange={handleChange}/>
        </label>

        <input className="submit" type='submit' value='Submit' onClick={createCreator}></input>
      </form>
    </div>
  )
}

export default AddCreator