import { TBuilder } from '@/core';
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
    AttributeLocalizedEnumValueRest.presets.l(),
    AttributeLocalizedEnumValueRest.presets.xl(),
  ]);

export const graphqlPreset = (): TBuilder<TAttributeLocalizedEnumTypeGraphql> =>
  GraphqlModelBuilder().values({
    results: [
      AttributeLocalizedEnumValueGraphql.presets.l().build(),
      AttributeLocalizedEnumValueGraphql.presets.xl().build(),
    ],
    total: 2,
    __typename: 'LocalizableEnumValueTypeResult',
  });

export const compatPreset = (): TBuilder<TAttributeLocalizedEnumType> =>
  CompatModelBuilder().values([
    AttributeLocalizedEnumValue.presets.l(),
    AttributeLocalizedEnumValue.presets.xl(),
  ]);
