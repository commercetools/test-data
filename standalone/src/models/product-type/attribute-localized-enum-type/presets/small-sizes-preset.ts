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
    AttributeLocalizedEnumValueRest.presets.s(),
    AttributeLocalizedEnumValueRest.presets.m(),
  ]);

export const graphqlPreset = (): TBuilder<TAttributeLocalizedEnumTypeGraphql> =>
  GraphqlModelBuilder().values({
    results: [
      AttributeLocalizedEnumValueGraphql.presets.s().build(),
      AttributeLocalizedEnumValueGraphql.presets.m().build(),
    ],
    total: 2,
    __typename: 'LocalizableEnumValueTypeResult',
  });

export const compatPreset = (): TBuilder<TAttributeLocalizedEnumType> =>
  CompatModelBuilder().values([
    AttributeLocalizedEnumValue.presets.s(),
    AttributeLocalizedEnumValue.presets.m(),
  ]);
