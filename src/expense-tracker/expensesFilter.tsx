import {categories} from "@/App.tsx";

interface Prop{
    onSelectCategory: (category:string) => void
}

export default function ExpensesFilter({onSelectCategory}:Prop) {

    return(
        <>
            <select className="form-select form-select-sm w-25 mt-5 mb-5" aria-label="Small select example" onChange={(event)=>onSelectCategory(event.target.value)}>
                <option  selected>All categories</option>
                {categories.map(category => <option value={category}>{category}</option>)}
            </select>
        </>
    )
}