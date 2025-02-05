"use client"

import { useState } from "react"
import ProjectSetup from "./components/ProjectSetup"
import PeopleManagement from "./components/PeopleManagement"
import TransactionsSection from "./components/TransactionsSection"
import SettlementView from "./components/SettlementView"
import ExportSection from "./components/ExportSection"

export default function Home() {
    const [activeProject, setActiveProject] = useState(null)
    const [people, setPeople] = useState([])
    const [transactions, setTransactions] = useState([])

    return (
        <div className="space-y-8">
            <>
                <PeopleManagement people={people} setPeople={setPeople} />
                <TransactionsSection
                    people={people}
                    transactions={transactions}
                    setTransactions={setTransactions}
                />
                <SettlementView people={people} transactions={transactions} />
                <ExportSection
                    project={activeProject}
                    people={people}
                    transactions={transactions}
                />
            </>
        </div>
    )
}
