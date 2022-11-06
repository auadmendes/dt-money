import { useForm } from "react-hook-form";
import { useContext } from "react";

import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from "../../../../contexts/TransactionContext";
import * as z from 'zod';

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransaction(data: SearchFormInputs) {
    // await new Promise(resolve => setTimeout(resolve, 4000))
    // console.log(data);

    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="search for transactions"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}