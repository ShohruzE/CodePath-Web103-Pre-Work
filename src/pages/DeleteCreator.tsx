import { useState } from "react";
import { supabase } from "../client.ts";
import { NavLink, useLocation, useParams } from "react-router-dom";

type Creator = {
  name: string
  description: string
  imageURL?: string
  url: string
}

const DeleteCreator = () => {

  const { id } = useParams();
  const location = useLocation();
  const creatorState = location.state;

  const [creator, setCreator] = useState<Creator>({
    name: creatorState?.name ?? "",
    description: creatorState?.description ?? "",
    imageURL: creatorState?.imageURL ?? "",
    url: creatorState?.url ?? "",
  });

  const deleteCreator = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id)
    if (error) {
      console.error(error)
    }
  };

  return (
    <dialog open>
      <article>
        <h3>Are you sure you want to delete this creator?</h3>
        <p>
          Please note that this is an irreversible action, so choose wisely. 
        </p>
        <footer>
          <NavLink to={`/view-creator/${id}`} state={creator} role="button" className="secondary">Cancel</NavLink>
          <NavLink to="/" role="button" onClick={deleteCreator}>Confirm</NavLink>
        </footer>
      </article>
    </dialog>
  )
}

export default DeleteCreator