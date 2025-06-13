import { fake, TModelFieldsConfig } from '@/core';
import { TCtpLocalizedString } from '@/graphql-types';
import { LocalizedString } from '@/models/commons';
import {
  TAttributeLocalizedEnumValueGraphql,
  TAttributeLocalizedEnumValueRest,
} from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumvalue

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumValueRest> =
  {
    fields: {
      ...commonFieldsConfig,
      label: fake(() => LocalizedString.random()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumValueGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      label: null, // computed field
      labelAllLocales: fake(() => LocalizedString.random()),
      __typename: 'LocalizableEnumValueType',
    },
    postBuild: (model, context) => {
      // This is needed for the compatibility builder since it's built from the REST model
      if (model.label && context?.isCompatMode) {
        const _labelAllLocales =
          model.label as unknown as TCtpLocalizedString[];
        return {
          ...model,
          labelAllLocales: _labelAllLocales,
          label:
            LocalizedString.resolveGraphqlDefaultLocaleValue(_labelAllLocales),
        };
      }

      return {
        ...model,
        label: LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.labelAllLocales
        ),
      };
    },
  };
