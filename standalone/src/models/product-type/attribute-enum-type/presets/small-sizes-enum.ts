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
    AttributePlainEnumValueRest.presets.s(),
    AttributePlainEnumValueRest.presets.m(),
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
  ]);
