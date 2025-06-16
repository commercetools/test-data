import {
  fake,
  oneOf,
  sequence,
  TModelFieldsConfig,
  buildGraphqlList,
} from '@/core';
import { ClientLogging, LocalizedString } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { productSelectionMode } from './constants';
import { ProductOfSelectionGraphql } from './product-of-selection';
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
      productRefs: fake(() =>
        buildGraphqlList([ProductOfSelectionGraphql.random()], {
          __typename: 'SelectionOfProductQueryResult',
        })
      ),
    },
    postBuild: (model) => {
      const name = model.nameAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
        : undefined;

      return {
        ...model,
        name,
      };
    },
  };
