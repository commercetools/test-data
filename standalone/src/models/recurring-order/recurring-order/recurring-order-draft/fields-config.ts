import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { ReferenceDraftGraphql } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TRecurringOrderDraftGraphql } from '../types';

const [getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  key: null,
  cartVersion: sequence(),
  startsAt: fake(getNewerDate),
  state: null,
  custom: null,
};

export const graphqlFieldsConfig: TModelFieldsConfig<TRecurringOrderDraftGraphql> =
  {
    fields: {
      cart: fake((f) => ReferenceDraftGraphql.presets.cartReference()),
      recurringOrderState: null,
      expiresAt: null,
      ...commonFieldsConfig,
    },
  };
