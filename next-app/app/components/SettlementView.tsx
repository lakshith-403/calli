import { Button } from "./ui/button"
import { Transaction } from "./TransactionsSection"
import { useState } from "react"

type Settlement = {
    from: string
    to: string
    amount: number
}

export default function SettlementView({
    people,
    transactions,
}: {
    people: string[]
    transactions: Transaction[]
}) {
    const [settlement, setSettlement] = useState<Settlement[]>([])

    const calculateSettlement = (transactions: Transaction[]): Settlement[] => {
        // Calculate net balance for each person
        const balanceMap: { [key: string]: number } = {}

        for (const transaction of transactions) {
            const share = transaction.amount / transaction.beneficiaries.length
            balanceMap[transaction.payer] =
                (balanceMap[transaction.payer] || 0) + transaction.amount
            for (const beneficiary of transaction.beneficiaries) {
                balanceMap[beneficiary] = (balanceMap[beneficiary] || 0) - share
            }
        }

        // Convert balance map to array and filter near-zero balances
        let entries = Object.keys(balanceMap)
            .map((name) => ({ name, amount: balanceMap[name] }))
            .filter((person) => Math.abs(person.amount) > 1e-6) // Handling floating point precision

        const settlements: Settlement[] = []

        while (entries.length >= 2) {
            let maxCreditor: { name: string; amount: number } | null = null
            let maxDebtor: { name: string; amount: number } | null = null

            // Find the largest creditor and debtor
            for (const person of entries) {
                if (person.amount > 0) {
                    if (!maxCreditor || person.amount > maxCreditor.amount) {
                        maxCreditor = person
                    }
                } else if (person.amount < 0) {
                    if (!maxDebtor || person.amount < maxDebtor.amount) {
                        maxDebtor = person
                    }
                }
            }

            if (!maxCreditor || !maxDebtor) break

            const amount = Math.min(maxCreditor.amount, -maxDebtor.amount)
            settlements.push({
                from: maxDebtor.name,
                to: maxCreditor.name,
                amount,
            })

            // Update balances
            maxCreditor.amount -= amount
            maxDebtor.amount += amount

            // Rebuild entries by filtering out near-zero balances
            entries = entries.filter((person) => Math.abs(person.amount) > 1e-6)
        }

        return settlements
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Settlement</h2>
            <Button
                onClick={() => setSettlement(calculateSettlement(transactions))}
            >
                Calculate Settlement
            </Button>
            <div className="space-y-2">
                {settlement.map((settlement, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded shadow dark:bg-gray-800"
                    >
                        <p>
                            {settlement.from} pays {settlement.to} $
                            {settlement.amount}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
