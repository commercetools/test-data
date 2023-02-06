import * as AttributeType from '@commercetools-test-data/attribute-type';
import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TAttributeDefinitionDraft } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedefinitiondraft

const generator = Generator<TAttributeDefinitionDraft>({
  fields: {
    type: fake(() => AttributeType.random()),
    name: fake((f) => f.commerce.productName()),
    label: fake(() => LocalizedString.random()),
    inputTip: fake(() => LocalizedString.random()),
    isRequired: fake((f) => f.datatype.boolean()),
    attributeConstraint: fake((f) =>
      f.helpers.arrayElement([
        'SameForAll',
        'None',
        'Unique',
        'CombinationUnique',
      ])
    ),
    inputHint: fake((f) => f.helpers.arrayElement(['SingleLine', 'MultiLine'])),
    isSearchable: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
