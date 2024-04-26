import {
    Table,
    TableBody,
    TableCaption,
    TableCell, TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button.tsx";


interface Prop{
    items: Items[];
    onClick: (id:number) => void;
}

interface Items{
    id:number,
    description:string;
    amount:number;
    category:string;
}

export default function ExpenseTable({items, onClick}:Prop) {
    return (
        <>
            <Table className="w-25 p-3">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] ">Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map(items =>
                        <TableRow key={items.id}>
                            <TableCell className="font-medium">{items.description}</TableCell>
                            <TableCell className="font-medium">{items.amount}</TableCell>
                            <TableCell className="font-medium">{items.category}</TableCell>
                            <TableCell className="text-right">{<Button onClick={() => onClick(items.id)} variant={"outline"} className={"btn btn-outline-danger"}>Delete</Button>}</TableCell>
                        </TableRow>
                    )}

                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell className="font-medium">Total</TableCell>
                        <TableCell className="font-medium">${items.reduce((total,item) => item.amount + total,0).toFixed(2)}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

        </>
    )
}