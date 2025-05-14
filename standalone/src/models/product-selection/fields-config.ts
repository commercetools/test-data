import { fake, oneOf, sequence, TModelFieldsConfig } from '@/core';
import {
  ClientLogging,
  LocalizedString,
  //   ReferenceGraphql,
} from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { productSelectionMode } from './constants';
import { TProductSelectionRest, TProductSelectionGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: fake((f) => f.lorem.slug(2)),
  name: fake(() => LocalizedString.random()),
  productCount: fake((f) => f.number.int()),
  mode: oneOf(...Object.values(productSelectionMode)),
  custom: null,
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TProductSelectionRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductSelectionGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ProductSelection',
      nameAllLocales: fake(() => LocalizedString.random()),
      productRefs: null,
    },
    postBuild: (model) => {
      const name = model.nameAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
        : undefined;

      //   const productRefs = ReferenceGraphql.presets
      //     .productReference()
      //     .buildGraphql();

      return {
        name,
        // productRefs,
      };
    },
  };
