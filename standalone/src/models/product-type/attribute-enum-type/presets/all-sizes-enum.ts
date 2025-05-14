import { TBuilder } from '@/core';
import {
  AttributePlainEnumValue,
  AttributePlainEnumValueGraphql,
  AttributePlainEnumValueRest,
} from '../../attribute-plain-enum-value';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import {
  TAttributeEnumType,
  TAttributeEnumTypeGraphql,
  TAttributeEnumTypeRest,
} from '../types';

export const restPreset = (): TBuilder<TAttributeEnumTypeRest> =>
  RestModelBuilder().values([
    AttributePlainEnumValueRest.presets.s(),
    AttributePlainEnumValueRest.presets.m(),
    AttributePlainEnumValueRest.presets.l(),
    AttributePlainEnumValueRest.presets.xl(),
  ]);

export const graphqlPreset = (): TBuilder<TAttributeEnumTypeGraphql> =>
  GraphqlModelBuilder().values({
    total: 4,
    results: [
      AttributePlainEnumValueGraphql.presets.s().build(),
      AttributePlainEnumValueGraphql.presets.m().build(),
      AttributePlainEnumValueGraphql.presets.l().build(),
      AttributePlainEnumValueGraphql.presets.xl().build(),
    ],
    __typename: 'PlainEnumValueResult',
  });

export const compatPreset = (): TBuilder<TAttributeEnumType> =>
  CompatModelBuilder().values([
    AttributePlainEnumValue.presets.s(),
    AttributePlainEnumValue.presets.m(),
    AttributePlainEnumValue.presets.l(),
    AttributePlainEnumValue.presets.xl(),
  ]);
