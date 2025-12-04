import { fake, type TModelFieldsConfig, oneOf } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { RecurrencePolicyGraphql } from '@/models/recurring-order';
import { createRelatedDates } from '@/utils';
import { priceSelectionMode } from './constants';
import type {
  TLineItemRecurrenceInfoGraphql,
  TLineItemRecurrenceInfoRest,
} from './types';

const [getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  priceSelectionMode: oneOf(...Object.values(priceSelectionMode)),
};

export const restFieldsConfig: TModelFieldsConfig<TLineItemRecurrenceInfoRest> =
  {
    fields: {
      recurrencePolicy: fake(() =>
        ReferenceRest.presets.recurrencePolicyReference()
      ),
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TLineItemRecurrenceInfoGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      recurrencePolicy: fake(() => RecurrencePolicyGraphql.random()),
      expiresAt: fake(getNewerDate),
      recurrencePolicyRef: null,
      __typename: 'LineItemRecurrenceInfo',
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
