import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TTextLineItemRest, TTextLineItemGraphql } from './types';

const [addedAt] = createRelatedDates();

const commonFieldsConfig = {
  addedAt: fake(addedAt),
  custom: null,
  description: null,
  id: fake((f) => f.string.uuid()),
  key: null,
  quantity: fake((f) =>
    f.number.int({
      min: 1,
    })
  ),
};

export const restFieldsConfig: TModelFieldsConfig<TTextLineItemRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake(() => LocalizedString.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TTextLineItemGraphql> = {
  fields: {
    ...commonFieldsConfig,
    descriptionAllLocales: null,
    name: null,
    nameAllLocales: fake(() => LocalizedString.random()),
    __typename: 'TextLineItem',
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
      ...model,
      name,
      description,
    };
  },
};
