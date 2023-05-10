import { useForm , useFieldArray, Controller } from "react-hook-form";

export default function ProgramForm() {

  const { register, handleSubmit, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2 mx-auto gap-y-2">
      <input placeholder="Program Title" {...register("title", { required: true })} />
      <input placeholder="Program Description"{...register("description", { required: true })} />
      
      <h2>Exercises</h2>
      <ul className="flex flex-col gap-y-2">
        {fields.map((item, index) => (
          <li key={item.id} className="flex flex-col gap-y-2">
            <input placeholder="Bench Press"{...register(`test.${index}.exercise`)} />
            <input placeholder="4"{...register(`test.${index}.sets`)} />
            <input placeholder="8-12"{...register(`test.${index}.reps`)} />
            <input placeholder="1 min"{...register(`test.${index}.rest`)} />
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