import { useForm , useFieldArray, Controller } from "react-hook-form";

export default function ProgramForm() {

  const { register, handleSubmit, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "days",
    nestedArray: [{ field1: "append", field2: "append" }]
  });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto gap-y-2">
      <input placeholder="Program Title" {...register("title", { required: true })} />
      <input placeholder="Program Description"{...register("description", { required: true })} />
      
      <h2>Exercises</h2>
      <ul className="flex flex-col gap-y-2">
        {fields.map((item, index) => (
          <li key={item.id} className="flex flex-col gap-y-2">
            <input placeholder="Bench Press"{...register(`days.${index}.exercise`)} />
            <input placeholder="4"{...register(`days.${index}.sets`)} />
            <input placeholder="8-12"{...register(`days.${index}.reps`)} />
            <input placeholder="1 min"{...register(`days.${index}.rest`)} />
            <button type="button" onClick={() => remove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({exercise: "", sets: "", reps: "", rest: ""})}
      >
        append
      </button>

      <input type="submit" />
    </form>
  )
}