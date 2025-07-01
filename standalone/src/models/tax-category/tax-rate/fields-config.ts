import { fake, TModelFieldsConfig } from '@/core';
import { TTaxRateGraphql, TTaxRateRest } from './types';

const commonFieldsConfig = {
  amount: fake((f) => Number(f.finance.amount({ min: 0, max: 1, dec: 3 }))),
  country: fake((f) => f.location.countryCode()),
  id: null,
  includedInPrice: fake(() => true),
  key: null,
  name: fake((f) => f.lorem.words(2)),
  state: null,
};

// readonly id?: string;
// readonly key?: string;
// readonly name: string;
// readonly amount: number;
// readonly includedInPrice: boolean;
// readonly country: string;
// readonly state?: string;
// readonly subRates?: SubRate[];
export const restFieldsConfig: TModelFieldsConfig<TTaxRateRest> = {
  fields: {
    ...commonFieldsConfig,
    subRates: null,
  },
};

// amount: Scalars['Float']['output'];
// country: Scalars['Country']['output'];
// id?: Maybe<Scalars['String']['output']>;
// includedInPrice: Scalars['Boolean']['output'];
// key?: Maybe<Scalars['String']['output']>;
// name: Scalars['String']['output'];
// state?: Maybe<Scalars['String']['output']>;
// subRates: Array<TCtpSubRate>;
export const graphqlFieldsConfig: TModelFieldsConfig<TTaxRateGraphql> = {
  fields: {
    ...commonFieldsConfig,
    subRates: [],
    __typename: 'TaxRate',
  },
};
