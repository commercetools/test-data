import { fake, oneOf, sequence, type TModelFieldsConfig } from '@/core';
import { ReferenceDraftGraphql, ReferenceDraftRest } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { recurringOrderState } from '../constants';
import type {
  TRecurringOrderDraftGraphql,
  TRecurringOrderDraftRest,
} from '../types';

const [, , getFutureDate] = createRelatedDates();

const commonFieldsConfig = {
  key: null,
  cartVersion: sequence(),
  startsAt: fake(getFutureDate),
  expiresAt: null,
  state: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TRecurringOrderDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    cart: fake((f) => ReferenceDraftRest.presets.cartReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TRecurringOrderDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      recurringOrderState: oneOf(...Object.values(recurringOrderState)),
      cart: fake((f) => ReferenceDraftGraphql.presets.cartReference()),
    },
  };
