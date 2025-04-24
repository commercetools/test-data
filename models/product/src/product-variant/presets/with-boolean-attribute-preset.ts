import { LocalizedString } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  AttributeBooleanType,
  AttributeDefinition,
} from '@commercetools-test-data/product-type';
import { ProductVariant, ProductVariantGraphql, ProductVariantRest } from '..';
import { Attribute } from '../..';
import {
  TProductVariant,
  TProductVariantGraphql,
  TProductVariantRest,
} from '../types';

const buildGraphqlAttribute = () =>
  Attribute.random()
    .name('test-boolean-attribute')
    .value(true)
    .attributeDefinition(
      AttributeDefinition.random()
        .attributeConstraint('None')
        .inputHint('SingleLine')
        .inputTip(LocalizedString.random().en('Test set attribute'))
        .isRequired(false)
        .isSearchable(false)
        .label(LocalizedString.random().en('Test set attribute'))
        .name('test-boolean-attribute')
        .type(AttributeBooleanType.random())
    );

export const restPreset = (): TBuilder<TProductVariantRest> => {
  return ProductVariantRest.random().attributes([
    Attribute.random().name('test-boolean-attribute').value(true),
  ]);
};

export const graphqlPreset = (): TBuilder<TProductVariantGraphql> => {
  return ProductVariantGraphql.random().attributesRaw([
    buildGraphqlAttribute(),
  ]);
};

export const compatPreset = (): TBuilder<TProductVariant> => {
  return ProductVariant.random().attributes([buildGraphqlAttribute()]);
};
