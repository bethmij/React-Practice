import {categories} from "@/App.tsx";
import {z} from 'zod'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export default function ExpenseForm() {

    const schema = z.object({
        description: z.string().min(5, {message: "min 5"}),
        amount: z.number().min(0.1).max(10_000),
        category: z.enum(categories, {
            errorMap: () => ({message: "Category required"})
        })
    })

    type FormData =z.infer<typeof schema>

    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)})

    return (
        <>
            <form className="w-25 " onSubmit={handleSubmit(()=>console.log("submit"))}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input {...register('description')} type="text" className="form-control" id="description" aria-describedby="emailHelp"/>
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input {...register('amount' , {valueAsNumber: true})} type="number" className="form-control" id="amount"/>
                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                </div>
                <div className="mb-3 form-check">
                    <select {...register('category')} className="form-select form-select-sm mt-5 mb-5" aria-label="Small select example">
                        <option selected>All categories</option>
                        {categories.map(category => <option value={category}>{category}</option>)}
                        {errors.category && <p className="text-danger">{errors.category.message}</p>}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}