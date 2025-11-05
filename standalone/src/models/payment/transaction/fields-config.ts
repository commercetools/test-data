import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import { CentPrecisionMoney } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TransactionState, TransactionType } from './constants';
import type { TTransactionRest, TTransactionGraphql } from './types';

// Reference: https://docs.commercetools.com/api/projects/payments#transaction

const [getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  timestamp: fake(getOlderDate),
  type: oneOf(...Object.values(TransactionType)),
  amount: fake((f) => CentPrecisionMoney.random()),
  interactionId: null,
  state: oneOf(...Object.values(TransactionState)),
  interfaceId: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TTransactionRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTransactionGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Transaction',
  },
};
