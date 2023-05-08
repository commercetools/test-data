import { AttributeType } from '@commercetools-test-data/attribute-type';
import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { attributeConstraints, inputHints } from '../constants';
import type { TAttributeDefinitionDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributedefinitiondraft

const generator = Generator<TAttributeDefinitionDraft>({
  fields: {
    type: fake(() => AttributeType.random()),
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
