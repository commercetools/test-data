import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TRecurrencePolicyGraphql } from './types';

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
