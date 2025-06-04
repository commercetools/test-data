import type { TBuilder } from '@/core';
import { LocalizedString } from '@/models/commons';
import {
  AttributeTextType,
  AttributeTextTypeGraphql,
  AttributeTextTypeRest,
} from '../../attribute-text-type';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import * as constants from '../constants';
import type {
  TAttributeDefinition,
  TAttributeDefinitionGraphql,
  TAttributeDefinitionRest,
} from '../types';

export const restPreset = (): TBuilder<TAttributeDefinitionRest> =>
  RestModelBuilder()
    .attributeConstraint(constants.attributeConstraints.None)
    .name('country-of-origin')
    .label(LocalizedString.presets.empty().en('Country of Origin'))
    .isRequired(true)
    .type(AttributeTextTypeRest.random());

export const graphqlPreset = (): TBuilder<TAttributeDefinitionGraphql> =>
  GraphqlModelBuilder()
    .attributeConstraint(constants.attributeConstraints.None)
    .name('country-of-origin')
    .labelAllLocales(LocalizedString.presets.empty().en('Country of Origin'))
    .isRequired(true)
    .type(AttributeTextTypeGraphql.random());

export const compatPreset = (): TBuilder<TAttributeDefinition> =>
  CompatModelBuilder()
    .attributeConstraint(constants.attributeConstraints.None)
    .name('country-of-origin')
    .label(LocalizedString.presets.empty().en('Country of Origin'))
    .isRequired(true)
    .type(AttributeTextType.random());
