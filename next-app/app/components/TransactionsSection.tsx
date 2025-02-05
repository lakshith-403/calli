import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select } from "./ui/select"
import { Checkbox } from "./ui/checkbox"

export default function TransactionsSection({ people, transactions, setTransactions }) {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [payer, setPayer] = useState("")
  const [beneficiaries, setBeneficiaries] = useState([])

  const handleAddTransaction = () => {
    if (name && amount && payer) {
      setTransactions([...transactions, { name, amount: Number.parseFloat(amount), payer, beneficiaries }])
      setName("")
      setAmount("")
      setPayer("")
      setBeneficiaries([])
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Transactions</h2>
      <div className="space-y-2">
        <Input placeholder="Transaction Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Select value={payer} onChange={(e) => setPayer(e.target.value)}>
          <option value="">Who paid?</option>
          {people.map((person) => (
            <option key={person} value={person}>
              {person}
            </option>
          ))}
        </Select>
        <div>
          <p className="mb-2">Who benefited?</p>
          {people.map((person) => (
            <div key={person} className="flex items-center space-x-2">
              <Checkbox
                id={person}
                checked={beneficiaries.includes(person)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setBeneficiaries([...beneficiaries, person])
                  } else {
                    setBeneficiaries(beneficiaries.filter((b) => b !== person))
                  }
                }}
              />
              <label htmlFor={person}>{person}</label>
            </div>
          ))}
        </div>
        <Button onClick={handleAddTransaction}>Add Transaction</Button>
      </div>
      <div className="space-y-2">
        {transactions.map((transaction, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{transaction.name}</h3>
            <p>Amount: ${transaction.amount}</p>
            <p>Paid by: {transaction.payer}</p>
            <p>Beneficiaries: {transaction.beneficiaries.join(", ") || "Everyone"}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

