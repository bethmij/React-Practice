// import {useRef} from "react";
import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
// import {c} from "vite/dist/node/types.d-aGj9QkWt";

const schema = z.object({
    name: z.string().min(3),
    age:z.number().min(18, "should older than 18")
})

type FormData = z.infer<typeof schema>

export default function Form() {

    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    const {register, handleSubmit, formState:{errors, isValid}} = useForm<FormData>({resolver:zodResolver(schema)})

    const onSubmit = (data:FieldValues) => console.log(data)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
            //     onSubmit={
                // (event) => {
                //     event.preventDefault()
                //     if (nameRef.current !== null && ageRef.current !== null) {
                //         console.log(nameRef.current.value)
                //         console.log(ageRef.current.value)
                //     }
                // }
            // }
            >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input {...register('name', {required:true, minLength:3})} type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                    <input {...register('age', {valueAsNumber:true})} type="number" className="form-control" id="age"/>
                    {errors.age && <p className="text-danger">{errors.age.message}</p>}

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button disabled={!isValid} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}