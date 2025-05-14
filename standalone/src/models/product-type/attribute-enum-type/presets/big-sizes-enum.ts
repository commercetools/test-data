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
    AttributePlainEnumValueRest.presets.l(),
    AttributePlainEnumValueRest.presets.xl(),
  ]);

export const graphqlPreset = (): TBuilder<TAttributeEnumTypeGraphql> =>
  GraphqlModelBuilder().values({
    total: 2,
    results: [
      AttributePlainEnumValueGraphql.presets.l().build(),
      AttributePlainEnumValueGraphql.presets.xl().build(),
    ],
    __typename: 'PlainEnumValueResult',
  });

export const compatPreset = (): TBuilder<TAttributeEnumType> =>
  CompatModelBuilder().values([
    AttributePlainEnumValue.presets.l(),
    AttributePlainEnumValue.presets.xl(),
  ]);
