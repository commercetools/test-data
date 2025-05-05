import { TBuilder } from '@commercetools-test-data/core';
import {
  AttributeLocalizedEnumValue,
  AttributeLocalizedEnumValueGraphql,
  AttributeLocalizedEnumValueRest,
} from '../../attribute-localized-enum-value';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';
import {
  TAttributeLocalizedEnumType,
  TAttributeLocalizedEnumTypeGraphql,
  TAttributeLocalizedEnumTypeRest,
} from '../types';

export const restPreset = (): TBuilder<TAttributeLocalizedEnumTypeRest> =>
  RestModelBuilder().values([
    AttributeLocalizedEnumValueRest.presets.s(),
    AttributeLocalizedEnumValueRest.presets.m(),
    AttributeLocalizedEnumValueRest.presets.l(),
    AttributeLocalizedEnumValueRest.presets.xl(),
  ]);

export const graphqlPreset = (): TBuilder<TAttributeLocalizedEnumTypeGraphql> =>
  GraphqlModelBuilder().values([
    AttributeLocalizedEnumValueGraphql.presets.s(),
    AttributeLocalizedEnumValueGraphql.presets.m(),
    AttributeLocalizedEnumValueGraphql.presets.l(),
    AttributeLocalizedEnumValueGraphql.presets.xl(),
  ]);

export const compatPreset = (): TBuilder<TAttributeLocalizedEnumType> =>
  CompatModelBuilder().values([
    AttributeLocalizedEnumValue.presets.s(),
    AttributeLocalizedEnumValue.presets.m(),
    AttributeLocalizedEnumValue.presets.l(),
    AttributeLocalizedEnumValue.presets.xl(),
  ]);
