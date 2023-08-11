import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"

const DeleteButton = ({ itemName, itemId }) => {
  const { deleteItem } = useStock()
  const navigate = useNavigate()

  const handleDelete = () => {
    if (confirm(`Tem certexa que deseja excluir ${itemName}?`)) {
      deleteItem(itemId)
      navigate('/items')
    }
  }

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  )
}

export default DeleteButton