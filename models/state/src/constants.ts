const roles = {
  ReviewIncludedInStatistics: 'ReviewIncludedInStatistics',
  Return: 'Return',
} as const;

const type = {
  OrderState: 'OrderState',
  LineItemState: 'LineItemState',
  ProductState: 'ProductState',
  ReviewState: 'ReviewState',
  PaymentState: 'PaymentState',
  QuoteRequestState: 'QuoteRequestState',
  StagedQuoteState: 'StagedQuoteState',
  QuoteState: 'QuoteState',
} as const;

export { roles, type };
