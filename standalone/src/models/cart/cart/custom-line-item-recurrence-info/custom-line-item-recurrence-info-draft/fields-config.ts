import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceDraftGraphql, ReferenceDraftRest } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type {
  TCustomLineItemRecurrenceInfoDraftGraphql,
  TCustomLineItemRecurrenceInfoDraftRest,
} from '../types';
const [getNewerDate] = createRelatedDates();

export const restFieldsConfig: TModelFieldsConfig<TCustomLineItemRecurrenceInfoDraftRest> =
  {
    fields: {
      recurrencePolicy: fake(() =>
        ReferenceDraftRest.presets.recurrencePolicyReference()
      ),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomLineItemRecurrenceInfoDraftGraphql> =
  {
    fields: {
      expiresAt: fake(getNewerDate),
      recurrencePolicyRef: fake(() =>
        ReferenceDraftGraphql.presets.recurrencePolicyReference()
      ),
      __typename: 'CustomLineItemRecurrenceInfoDraft',
    },
  };
