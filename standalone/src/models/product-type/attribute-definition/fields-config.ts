import { fake, oneOf, TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import {
  AttributeBooleanTypeGraphql,
  AttributeBooleanTypeRest,
} from '../attribute-boolean-type';
import {
  AttributeEnumTypeGraphql,
  AttributeEnumTypeRest,
} from '../attribute-enum-type';
import {
  AttributeTextTypeGraphql,
  AttributeTextTypeRest,
} from '../attribute-text-type';
import { attributeConstraints, inputHints, levels } from './constants';
import { TAttributeDefinitionGraphql, TAttributeDefinitionRest } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedefinition

const commonFieldsConfig = {
  attributeConstraint: fake((f) =>
    f.helpers.arrayElement(Object.values(attributeConstraints))
  ),
  name: fake((f) => f.lorem.slug(3)),
  inputHint: fake((f) => f.helpers.arrayElement(Object.values(inputHints))),
  isRequired: fake((f) => f.datatype.boolean()),
  isSearchable: fake((f) => f.datatype.boolean()),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeDefinitionRest> = {
  fields: {
    ...commonFieldsConfig,
    type: fake((f) =>
      f.helpers.arrayElement([
        AttributeBooleanTypeRest.random(),
        AttributeTextTypeRest.random(),
        AttributeEnumTypeRest.random(),
      ])
    ),
    label: fake(() => LocalizedString.random()),
    inputTip: fake(() => LocalizedString.random()),
    level: levels.Variant,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeDefinitionGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      inputTip: null,
      inputTipAllLocales: fake(() => LocalizedString.random()),
      label: null,
      labelAllLocales: fake(() => LocalizedString.random()),
      level: fake(() => levels.Variant),
      type: fake((f) =>
        f.helpers.arrayElement([
          AttributeBooleanTypeGraphql.random(),
          AttributeTextTypeGraphql.random(),
          AttributeEnumTypeGraphql.random(),
        ])
      ),
      __typename: 'AttributeDefinition',
    },
    postBuild: (model, context) => {
      let labelAllLocales = model.labelAllLocales;
      let inputTipAllLocales = model.inputTipAllLocales;

      // This is required because of the Compat builder presets.
      // It should be removed when the Compat builder is removed.
      if (context?.isCompatMode && model.label) {
        labelAllLocales =
          model.label as unknown as TAttributeDefinitionGraphql['labelAllLocales'];
      }
      if (context?.isCompatMode && model.inputTip) {
        inputTipAllLocales =
          model.inputTip as unknown as TAttributeDefinitionGraphql['inputTipAllLocales'];
      }

      const label =
        LocalizedString.resolveGraphqlDefaultLocaleValue(labelAllLocales);
      const inputTip =
        LocalizedString.resolveGraphqlDefaultLocaleValue(inputTipAllLocales);

      return {
        ...model,
        label,
        labelAllLocales,
        inputTip,
        inputTipAllLocales,
      };
    },
  };
