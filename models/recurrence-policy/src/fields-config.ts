import { LocalizedString } from '@commercetools-test-data/commons';
import {
  fake,
  sequence,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TRecurrencePolicyGraphql, TRecurrencePolicyRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: fake((f) => f.string.uuid()),
  name: null,
  description: null,
  schedule: null,
  createdAt: fake(getOlderDate),
  createdBy: null,
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: null,
};

export const restFieldsConfig: TModelFieldsConfig<TRecurrencePolicyRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TRecurrencePolicyGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      nameAllLocales: null,
      descriptionAllLocales: null,
      __typename: 'RecurrencePolicy',
    },
    postBuild: (model) => {
      const name = model.nameAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
        : model.nameAllLocales;

      const description = model.descriptionAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.descriptionAllLocales
          )
        : model.descriptionAllLocales;

      return {
        name,
        description,
      };
    },
  };
