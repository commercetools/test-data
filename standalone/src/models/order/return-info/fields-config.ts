import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import {
  LineItemReturnItemRest,
  LineItemReturnItemGraphql,
} from '../line-item-return-item';
import { TReturnInfoRest, TReturnInfoGraphql } from './types';

const [returnDate] = createRelatedDates();

const commonFieldsConfig = {
  returnTrackingId: fake((f) => f.string.uuid()),
  returnDate: fake(returnDate),
};

export const restFieldsConfig: TModelFieldsConfig<TReturnInfoRest> = {
  fields: {
    ...commonFieldsConfig,
    items: fake((f) =>
      f.helpers.arrayElement([LineItemReturnItemRest.random()])
    ),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TReturnInfoGraphql> = {
  fields: {
    ...commonFieldsConfig,
    items: fake((f) =>
      f.helpers.arrayElement([LineItemReturnItemGraphql.random()])
    ),
    __typename: 'ReturnInfo',
  },
};
