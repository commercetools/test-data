import { fake, TModelFieldsConfig } from '@/core';
import { LocalizedString, LocalizedStringDraft } from '@/models/commons';
import {
  AttributeBooleanTypeDraftGraphql,
  AttributeBooleanTypeDraftRest,
} from '../../attribute-boolean-type/attribute-boolean-type-draft';
import {
  AttributeEnumTypeDraftGraphql,
  AttributeEnumTypeDraftRest,
} from '../../attribute-enum-type/attribute-enum-type-draft';
import {
  AttributeTextTypeDraftGraphql,
  AttributeTextTypeDraftRest,
} from '../../attribute-text-type/attribute-text-type-draft';
import { attributeConstraints, inputHints, levels } from '../constants';
import {
  TAttributeDefinitionDraftGraphql,
  TAttributeDefinitionDraftRest,
} from '../types';

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

export const restFieldsConfig: TModelFieldsConfig<TAttributeDefinitionDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
      inputTip: fake(() => LocalizedString.random()),
      label: fake(() => LocalizedString.random()),
      type: fake((f) =>
        f.helpers.arrayElement([
          AttributeBooleanTypeDraftRest.random(),
          AttributeTextTypeDraftRest.random(),
          AttributeEnumTypeDraftRest.random(),
        ])
      ),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeDefinitionDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      inputTip: fake(() => LocalizedStringDraft.random()),
      label: fake(() => LocalizedStringDraft.random()),
      level: fake((f) => f.helpers.arrayElement(Object.values(levels))),
      type: fake((f) =>
        f.helpers.arrayElement([
          AttributeBooleanTypeDraftGraphql.random(),
          AttributeTextTypeDraftGraphql.random(),
          AttributeEnumTypeDraftGraphql.random(),
        ])
      ),
    },
  };
