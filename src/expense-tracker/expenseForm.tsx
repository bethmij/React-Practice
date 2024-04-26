import {categories} from "@/App.tsx";

export default function ExpenseForm() {

    return (
        <>
            <form className="w-25 ">
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="number" className="form-control" id="amount"/>
                </div>
                <div className="mb-3 form-check">
                    <select className="form-select form-select-sm mt-5 mb-5" aria-label="Small select example">
                        <option selected>All categories</option>
                        {categories.map(category => <option value={category}>{category}</option>)}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}