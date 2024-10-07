import {
  Address,
  ClientLogging,
  LocalizedString,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import {
  fake,
  sequence,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { roles } from './constants';
import type { TChannelGraphql, TChannelRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  key: fake((f) => f.lorem.slug(2)),
  roles: [roles.Primary],
  name: null,
  description: null,
  address: fake(() => Address.random()),
  reviewRatingStatistics: null,
  custom: null,
  geoLocation: null,
};
export const restFieldsConfig: TModelFieldsConfig<TChannelRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TChannelGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Channel',
    nameAllLocales: null,
    descriptionAllLocales: null,
  },
  postBuild: (model, context) => {
    if (context?.isCompatMode) {
      const nameAllLocales = model.name as unknown as TLocalizedStringGraphql;
      const descriptionAllLocales =
        model.description as unknown as TLocalizedStringGraphql;
      return {
        name: LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales),
        nameAllLocales,
        description: LocalizedString.resolveGraphqlDefaultLocaleValue(
          descriptionAllLocales
        ),
        descriptionAllLocales: descriptionAllLocales,
      };
    }

    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : undefined;
    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : undefined;
    return {
      name,
      description,
    };
  },
};
