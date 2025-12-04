import { fake, type TModelFieldsConfig } from '@/core';
import { oneOf } from '@/core';
import { ReferenceDraftGraphql, ReferenceDraftRest } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { priceSelectionMode } from '../constants';
import type {
  TLineItemRecurrenceInfoDraftGraphql,
  TLineItemRecurrenceInfoDraftRest,
} from '../types';
const [getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  priceSelectionMode: oneOf(...Object.values(priceSelectionMode)),
};

export const restFieldsConfig: TModelFieldsConfig<TLineItemRecurrenceInfoDraftRest> =
  {
    fields: {
      recurrencePolicy: fake(() =>
        ReferenceDraftRest.presets.recurrencePolicyReference()
      ),
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TLineItemRecurrenceInfoDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      expiresAt: fake(getNewerDate),
      recurrencePolicyRef: fake(() =>
        ReferenceDraftGraphql.presets.recurrencePolicyReference()
      ),
      __typename: 'LineItemRecurrenceInfoDraft',
    },
  };
