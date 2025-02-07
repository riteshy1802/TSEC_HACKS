import { useState } from "react"
import {Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ExpenseTracker() {
    const [transactions, setTransactions] = useState([])
    const [newTransaction, setNewTransaction] = useState({
        type: "income",
        description: "",
        amount: "",
        date: new Date().toISOString().split("T")[0],
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewTransaction((prev) => ({ ...prev, [name]: value }))
    }

    const handleAddTransaction = () => {
        if (newTransaction.description && newTransaction.amount) {
        setTransactions((prev) => [...prev, { ...newTransaction, id: Date.now() }])
        setNewTransaction({
            type: "income",
            description: "",
            amount: "",
            date: new Date().toISOString().split("T")[0],
        })
        }
    }

    const handleDeleteTransaction = (id) => {
        setTransactions((prev) => prev.filter((t) => t.id !== id))
    }

    const totalIncome = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + Number.parseFloat(t.amount), 0)

    const totalExpense = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + Number.parseFloat(t.amount), 0)

    const balance = totalIncome - totalExpense

    return (
        <div className="container mx-auto py-8">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                <CardTitle className="text-2xl font-bold">Expense Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Income</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-green-600">₹{totalIncome.toFixed(2)}</p>
                    </CardContent>
                    </Card>
                    <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Expense</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-red-600">₹{totalExpense.toFixed(2)}</p>
                    </CardContent>
                    </Card>
                    <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={`text-2xl font-bold ${balance >= 0 ? "text-green-600" : "text-red-600"}`}>
                        ₹{balance.toFixed(2)}
                        </p>
                    </CardContent>
                    </Card>
                </div>

                <form
                    onSubmit={(e) => {
                    e.preventDefault()
                    handleAddTransaction()
                    }}
                    className="space-y-4 mb-6"
                >
                    <div className="flex space-x-4">
                    <div className="flex-1">
                        <Label htmlFor="description">Description</Label>
                        <Input
                        id="description"
                        name="description"
                        value={newTransaction.description}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div>
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                        id="amount"
                        name="amount"
                        type="number"
                        min="0"
                        step="0.01"
                        value={newTransaction.amount}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                        id="date"
                        name="date"
                        type="date"
                        value={newTransaction.date}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    </div>
                    <div>
                    <RadioGroup
                        name="type"
                        value={newTransaction.type}
                        onValueChange={(value) => setNewTransaction((prev) => ({ ...prev, type: value }))}
                        className="flex space-x-4"
                    >
                        <div className="flex items-center space-x-2">
                        <RadioGroupItem value="income" id="income" />
                        <Label htmlFor="income">Income</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expense" id="expense" />
                        <Label htmlFor="expense">Expense</Label>
                        </div>
                    </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full">
                    Add Transaction
                    </Button>
                </form>

                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>
                            <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                                transaction.type === "income" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                            >
                            {transaction.type}
                            </span>
                        </TableCell>
                        <TableCell className="text-right">₹{Number.parseFloat(transaction.amount).toFixed(2)}</TableCell>
                        <TableCell>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteTransaction(transaction.id)}>
                            <Trash2 className="h-4 w-4" />
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </div>
    )
}

