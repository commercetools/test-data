import { fake, TModelFieldsConfig } from '@/core';
import { LocalizedString, LocalizedStringDraft } from '@/models/commons';
import {
  AttributeBooleanTypeDraftGraphql,
  AttributeBooleanTypeDraftRest,
} from '../../attribute-boolean-type/attribute-boolean-type-draft';
import { AttributeDateTimeTypeDraftGraphql } from '../../attribute-date-time-type/attribute-date-time-type-draft';
import { AttributeDateTypeDraftGraphql } from '../../attribute-date-type/attribute-date-type-draft';
import {
  AttributeEnumTypeDraftGraphql,
  AttributeEnumTypeDraftRest,
} from '../../attribute-enum-type/attribute-enum-type-draft';
import { AttributeLocalizableTextTypeDraftGraphql } from '../../attribute-localizable-text-type/attribute-localized-text-type-draft';
import { AttributeLocalizedEnumTypeDraftGraphql } from '../../attribute-localized-enum-type/attribute-localized-enum-type-draft';
import { AttributeMoneyTypeDraftGraphql } from '../../attribute-money-type/attribute-money-type-draft';
import { AttributeNumberTypeDraftGraphql } from '../../attribute-number-type/attribute-number-type-draft';
import { AttributeReferenceTypeDraftGraphql } from '../../attribute-reference-type/attribute-reference-type-draft';
import { AttributeSetTypeDraftGraphql } from '../../attribute-set-type/attribute-set-type-draft';
import {
  AttributeTextTypeDraftGraphql,
  AttributeTextTypeDraftRest,
} from '../../attribute-text-type/attribute-text-type-draft';
import { AttributeTimeTypeDraftGraphql } from '../../attribute-time-type/attribute-time-type-draft';
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
      level: levels.Variant,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeDefinitionDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      inputTip: fake(() => LocalizedStringDraft.random()),
      label: fake(() => LocalizedStringDraft.random()),
      level: fake(() => levels.Variant),
      type: fake((f) =>
        f.helpers.arrayElement([
          AttributeBooleanTypeDraftGraphql.random(),
          AttributeDateTypeDraftGraphql.random(),
          AttributeDateTimeTypeDraftGraphql.random(),
          AttributeEnumTypeDraftGraphql.random(),
          AttributeLocalizedEnumTypeDraftGraphql.random(),
          AttributeLocalizableTextTypeDraftGraphql.random(),
          AttributeMoneyTypeDraftGraphql.random(),
          AttributeNumberTypeDraftGraphql.random(),
          AttributeReferenceTypeDraftGraphql.random(),
          AttributeSetTypeDraftGraphql.random(),
          AttributeTextTypeDraftGraphql.random(),
          AttributeTimeTypeDraftGraphql.random(),
        ])
      ),
    },
    postBuild: (model) => {
      // The way the types are modeled in the GraphQL makes it difficult to actually define
      // the `type` field of this model.
      // We need to inspect the value of the `type` field in order to transform it into the expected format.
      // That's why we have to ignore the typescript warnings.
      // @ts-expect-error Simple attribute types have `dummy` field
      if (model.type.dummy) {
        return {
          ...model,
          type: {
            // @ts-expect-error Simple attribute types have `dummy` field
            [model.type.dummy]: {
              dummy: null,
            },
          },
        };
      }
      // @ts-expect-error AttributeEnumTypeDraftGraphql and AttributeLocalizedEnumTypeDraftGraphql types have a `name` field
      if (model.type.name) {
        // @ts-expect-error AttributeEnumTypeDraftGraphql and AttributeLocalizedEnumTypeDraftGraphql types have a `name` field
        const { name, ...rest } = model.type;
        return {
          ...model,
          type: {
            [name]: rest,
          },
        };
      }
      // @ts-expect-error AttributeReferenceTypeDraftGraphql type has a `referenceTypeId` field
      if (model.type.referenceTypeId) {
        return {
          ...model,
          type: {
            reference: {
              // @ts-expect-error AttributeReferenceTypeDraftGraphql type has a `referenceTypeId` field
              referenceTypeId: model.type.referenceTypeId,
            },
          },
        };
      }
      // @ts-expect-error AttributeSetTypeDraftGraphql type has a `elementType` field
      if (model.type.elementType) {
        return {
          ...model,
          type: {
            set: {
              // @ts-expect-error AttributeSetTypeDraftGraphql type has a `elementType` field
              elementType: model.type.elementType,
            },
          },
        };
      }
      return model;
    },
  };
