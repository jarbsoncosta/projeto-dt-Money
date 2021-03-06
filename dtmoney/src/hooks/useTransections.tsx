
import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface Delete {
    id: string
}

interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string

}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>


interface TransactionsProviderProps {
    children: ReactNode

}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
    deleteTransaction: (id: Delete) => Promise<void>


}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {

        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const transaction = response.data

        setTransactions([
            ...transactions,
            transaction

        ]);

    }
    async function deleteTransaction(id: Delete) {
        await api.delete(`transactions/${id}`)


    }


    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction, deleteTransaction }}>
            {children}

        </TransactionsContext.Provider>
    )

}
export function useTransections() {
    const context = useContext(TransactionsContext)

    return context
}

