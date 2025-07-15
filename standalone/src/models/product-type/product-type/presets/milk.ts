import { buildLimitGraphqlList, type TBuilder } from '@/core';
import { LocalizedString } from '@/models/commons';
import {
  AttributeBooleanTypeRest,
  AttributeTextType,
  AttributeDefinitionRest,
  AttributeTextTypeRest,
  AttributeDefinitionGraphql,
  AttributeBooleanTypeGraphql,
  AttributeTextTypeGraphql,
  AttributeBooleanType,
  AttributeDefinition,
  TAttributeDefinitionGraphql,
} from '../..';
import {
  attributeConstraints,
  inputHints,
} from '../../attribute-definition/constants';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import type {
  TProductType,
  TProductTypeGraphql,
  TProductTypeRest,
} from '../types';

export const restPreset = (): TBuilder<TProductTypeRest> =>
  RestModelBuilder()
    .name('Milk Product Type')
    .attributes([
      AttributeDefinitionRest.random()
        .attributeConstraint(attributeConstraints.None)
        .name('lactose-free')
        .label(LocalizedString.presets.empty().en('Lactose Free'))
        .inputTip(
          LocalizedString.presets
            .empty()
            .en('Important information for people with lactose intolerance')
        )
        .inputHint(inputHints.MultiLine)
        .isRequired(true)
        .isSearchable(true)
        .type(AttributeBooleanTypeRest.random()),
      AttributeDefinitionRest.random()
        .attributeConstraint(attributeConstraints.SameForAll)
        .name('cow-name')
        .label(
          LocalizedString.presets
            .empty()
            .en('Name of the cow producing the milk')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            .en('Public recognition of cow`s good deeds make it even happier!')
        )
        .inputHint(inputHints.SingleLine)
        .isRequired(true)
        .isSearchable(false)
        .type(AttributeTextTypeRest.random()),
    ]);

export const graphqlPreset = (): TBuilder<TProductTypeGraphql> =>
  GraphqlModelBuilder()
    .name('Milk Product Type')
    .attributeDefinitions(
      buildLimitGraphqlList<
        TAttributeDefinitionGraphql,
        'AttributeDefinitionResult'
      >(
        [
          AttributeDefinitionGraphql.random()
            .attributeConstraint(attributeConstraints.None)
            .name('lactose-free')
            .labelAllLocales(LocalizedString.presets.empty().en('Lactose Free'))
            .inputTipAllLocales(
              LocalizedString.presets
                .empty()
                .en('Important information for people with lactose intolerance')
            )
            .inputHint(inputHints.MultiLine)
            .isRequired(true)
            .isSearchable(true)
            .type(AttributeBooleanTypeGraphql.random()),
          AttributeDefinitionGraphql.random()
            .attributeConstraint(attributeConstraints.SameForAll)
            .name('cow-name')
            .labelAllLocales(
              LocalizedString.presets
                .empty()
                .en('Name of the cow producing the milk')
            )
            .inputTipAllLocales(
              LocalizedString.presets
                .empty()
                .en(
                  'Public recognition of cow`s good deeds make it even happier!'
                )
            )
            .inputHint(inputHints.SingleLine)
            .isRequired(true)
            .isSearchable(false)
            .type(AttributeTextTypeGraphql.random()),
        ],
        {
          __typename: 'AttributeDefinitionResult',
        }
      )
    );

export const compatPreset = (): TBuilder<TProductType> =>
  CompatModelBuilder()
    .name('Milk Product Type')
    .attributes([
      AttributeDefinition.random()
        .attributeConstraint(attributeConstraints.None)
        .name('lactose-free')
        .label(LocalizedString.presets.empty().en('Lactose Free'))
        .inputTip(
          LocalizedString.presets
            .empty()
            .en('Important information for people with lactose intolerance')
        )
        .inputHint(inputHints.MultiLine)
        .isRequired(true)
        .isSearchable(true)
        .type(AttributeBooleanType.random()),
      AttributeDefinition.random()
        .attributeConstraint(attributeConstraints.SameForAll)
        .name('cow-name')
        .label(
          LocalizedString.presets
            .empty()
            .en('Name of the cow producing the milk')
        )
        .inputTip(
          LocalizedString.presets
            .empty()
            .en('Public recognition of cow`s good deeds make it even happier!')
        )
        .inputHint(inputHints.SingleLine)
        .isRequired(true)
        .isSearchable(false)
        .type(AttributeTextType.random()),
    ]);
