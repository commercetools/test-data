import { buildLimitGraphqlList, TBuilder } from '@/core';
import {
  AttributePlainEnumValue,
  AttributePlainEnumValueGraphql,
  AttributePlainEnumValueRest,
} from '../../attribute-plain-enum-value';
import { TAttributePlainEnumValueGraphql } from '../../attribute-plain-enum-value/types';
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
  GraphqlModelBuilder().values(
    buildLimitGraphqlList<
      TAttributePlainEnumValueGraphql,
      'PlainEnumValueResult'
    >(
      [
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
    AttributePlainEnumValue.presets.l(),
    AttributePlainEnumValue.presets.xl(),
  ]);
