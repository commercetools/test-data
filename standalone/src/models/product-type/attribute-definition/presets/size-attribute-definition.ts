import type { TBuilder } from '@/core';
import { LocalizedString } from '@/models/commons';
import {
  AttributeEnumType,
  AttributeEnumTypeGraphql,
  AttributeEnumTypeRest,
} from '../..';
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
    .name('size')
    .label(LocalizedString.presets.empty().en('Size'))
    .inputTip(LocalizedString.presets.empty().en('Size of a product'))
    .inputHint(constants.inputHints.SingleLine)
    .isRequired(true)
    .isSearchable(true)
    .type(AttributeEnumTypeRest.presets.allSizesEnum());

export const graphqlPreset = (): TBuilder<TAttributeDefinitionGraphql> =>
  GraphqlModelBuilder()
    .attributeConstraint(constants.attributeConstraints.None)
    .name('size')
    .labelAllLocales(LocalizedString.presets.empty().en('Size'))
    .inputTipAllLocales(LocalizedString.presets.empty().en('Size of a product'))
    .inputHint(constants.inputHints.SingleLine)
    .isRequired(true)
    .isSearchable(true)
    .type(AttributeEnumTypeGraphql.presets.allSizesEnum());

export const compatPreset = (): TBuilder<TAttributeDefinition> =>
  CompatModelBuilder()
    .attributeConstraint(constants.attributeConstraints.None)
    .name('size')
    .label(LocalizedString.presets.empty().en('Size'))
    .inputTip(LocalizedString.presets.empty().en('Size of a product'))
    .inputHint(constants.inputHints.SingleLine)
    .isRequired(true)
    .isSearchable(true)
    .type(AttributeEnumType.presets.allSizesEnum());
