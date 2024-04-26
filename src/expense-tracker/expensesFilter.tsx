interface Prop{
    onSelectCategory: (category:string) => void
}

export default function ExpensesFilter({onSelectCategory}:Prop) {

    return(
        <>
            <select className="form-select form-select-sm w-25 mt-5 mb-5" aria-label="Small select example" onChange={(event)=>onSelectCategory(event.target.value)}>
                <option  selected>All categories</option>
                <option >Groceries</option>
                <option >Utilities</option>
                <option >Entertainment</option>
            </select>
        </>
    )
}