export const fetchTransactions = async (url: string) => {
  try {
    const response = await fetch(url)

    if (!response.ok) throw new Error('Error getting data')

    const transactions = await response.json()
    return transactions
  } catch (error) {
    console.error('Error feching data: ', error)
    throw error
  }
}
