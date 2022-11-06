import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";


export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={43} color="#00b37e" />
        </header>
        <strong>
          {priceFormatter.format(summary.income)}
        </strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown size={43} color="#F75A68" />
        </header>
        <strong>
          {'- '}
          {priceFormatter.format(summary.outcome)}
        </strong>
      </SummaryCard>
      <SummaryCard variant={summary.total < 0 ? 'red' : 'green'}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={43} color="#fff" />
        </header>
        <strong>
          {priceFormatter.format(summary.total)}
        </strong>
      </SummaryCard>
    </SummaryContainer>
  )
}