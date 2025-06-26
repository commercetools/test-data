import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import {
  shipmentState,
  paymentState,
  LineItemReturnItemType,
} from './constants';
import { TLineItemReturnItemRest, TLineItemReturnItemGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  key: null,
  quantity: fake((f) => f.number.int()),
  type: LineItemReturnItemType,
  comment: null,
  shipmentState: fake((f) =>
    f.helpers.arrayElement({ ...Object.values(shipmentState) })
  ),
  paymentState: fake((f) =>
    f.helpers.arrayElement({ ...Object.values(paymentState) })
  ),
  lineItemId: fake((f) => f.string.uuid()),
  custom: null,
  createdAt: fake(getOlderDate),
  lastModifiedAt: fake(getNewerDate),
};

export const restFieldsConfig: TModelFieldsConfig<TLineItemReturnItemRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TLineItemReturnItemGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'LineItemReturnItem',
    },
  };
