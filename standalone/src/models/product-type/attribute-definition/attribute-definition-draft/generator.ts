import { fake, Generator } from '../../../../core';
import { LocalizedStringDraft } from '../../../commons';
import {
  AttributeBooleanTypeDraft,
  AttributeEnumTypeDraft,
  AttributeTextTypeDraft,
} from '../../index';
import { attributeConstraints, inputHints } from '../constants';
import type { TAttributeDefinitionDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributedefinitiondraft

const generator = Generator<TAttributeDefinitionDraft>({
  fields: {
    type: fake((f) =>
      f.helpers.arrayElement([
        AttributeBooleanTypeDraft.random(),
        AttributeTextTypeDraft.random(),
        AttributeEnumTypeDraft.random(),
      ])
    ),
    name: fake((f) => f.lorem.slug(3)),
    label: fake(() => LocalizedStringDraft.random()),
    inputTip: fake(() => LocalizedStringDraft.random()),
    isRequired: fake((f) => f.datatype.boolean()),
    attributeConstraint: fake((f) =>
      f.helpers.arrayElement(Object.values(attributeConstraints))
    ),
    inputHint: fake((f) => f.helpers.arrayElement(Object.values(inputHints))),
    isSearchable: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
