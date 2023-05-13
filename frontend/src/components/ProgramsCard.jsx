import { useNavigate, useParams } from "react-router-dom"

export default function ProgramsCard(props) {

  let navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/${props.id}`)} 
      className="h-32 w-80 bg-[url('/man.jpg')] bg-cover bg-no-repeat bg-top rounded-2xl shadow-xl relative">
      <h1 className="absolute ml-4 font-bold text-gray-100 shadow-2xl top-24">
        {props.title}
      </h1>
    </div>
    )
}