import { fake, Generator } from '@/core';
import { LocalizedString } from '@/models/commons';
import {
  AttributeBooleanType,
  AttributeEnumType,
  AttributeTextType,
} from '../index';
import { attributeConstraints, inputHints } from './constants';
import { TAttributeDefinition } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedefinition

const generator = Generator<TAttributeDefinition>({
  fields: {
    type: fake((f) =>
      f.helpers.arrayElement([
        AttributeBooleanType.random(),
        AttributeTextType.random(),
        AttributeEnumType.random(),
      ])
    ),
    name: fake((f) => f.lorem.slug(3)),
    label: fake(() => LocalizedString.random()),
    inputTip: fake(() => LocalizedString.random()),
    isRequired: fake((f) => f.datatype.boolean()),
    attributeConstraint: fake((f) =>
      f.helpers.arrayElement(Object.values(attributeConstraints))
    ),
    inputHint: fake((f) => f.helpers.arrayElement(Object.values(inputHints))),
    isSearchable: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
