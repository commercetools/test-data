import { buildLimitGraphqlList, TBuilder } from '@/core';
import {
  AttributePlainEnumValue,
  AttributePlainEnumValueGraphql,
  AttributePlainEnumValueRest,
} from '../../attribute-plain-enum-value';
import { TAttributePlainEnumValueGraphql } from '../../index';
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
  GraphqlModelBuilder().values(
    buildLimitGraphqlList<
      TAttributePlainEnumValueGraphql,
      'PlainEnumValueResult'
    >(
      [
        AttributePlainEnumValueGraphql.presets.s(),
        AttributePlainEnumValueGraphql.presets.m(),
        AttributePlainEnumValueGraphql.presets.l(),
        AttributePlainEnumValueGraphql.presets.xl(),
      ],
      {
        __typename: 'PlainEnumValueResult',
      }
    )
  );

export const compatPreset = (): TBuilder<TAttributeEnumType> =>
  CompatModelBuilder().values([
    AttributePlainEnumValue.presets.s(),
    AttributePlainEnumValue.presets.m(),
    AttributePlainEnumValue.presets.l(),
    AttributePlainEnumValue.presets.xl(),
  ]);
