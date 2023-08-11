import { useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import ItemForm from "../../components/ItemForm"


const UpdateItem = () => {
  const { getItem } = useStock()
  const { id } = useParams()

  const item = getItem(id)

  return (
    <>
      <h2>Atualizar Item</h2>
      <ItemForm itemToUpdate={item}/>
    </>
  )
}

export default UpdateItem