import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { RecurrencePolicyGraphql } from '@/models/recurring-order';
import { createRelatedDates } from '@/utils';
import type {
  TCustomLineItemRecurrenceInfoGraphql,
  TCustomLineItemRecurrenceInfoRest,
} from './types';

const [getNewerDate] = createRelatedDates();

export const restFieldsConfig: TModelFieldsConfig<TCustomLineItemRecurrenceInfoRest> =
  {
    fields: {
      recurrencePolicy: fake(() =>
        ReferenceRest.presets.recurrencePolicyReference()
      ),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomLineItemRecurrenceInfoGraphql> =
  {
    fields: {
      recurrencePolicy: fake(() => RecurrencePolicyGraphql.random()),
      expiresAt: fake(getNewerDate),
      recurrencePolicyRef: null,
      __typename: 'CustomLineItemRecurrenceInfo',
    },
    postBuild: (model) => {
      return {
        ...model,
        recurrencePolicyRef: model.recurrencePolicy
          ? ReferenceGraphql.random()
              .typeId('recurrence-policy')
              .id(model.recurrencePolicy.id)
              .buildGraphql()
          : model.recurrencePolicyRef,
      };
    },
  };
