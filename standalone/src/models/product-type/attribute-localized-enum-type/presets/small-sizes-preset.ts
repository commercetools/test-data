import { buildLimitGraphqlList, TBuilder } from '@/core';
import {
  AttributeLocalizedEnumValue,
  AttributeLocalizedEnumValueGraphql,
  AttributeLocalizedEnumValueRest,
} from '../../attribute-localized-enum-value';
import { TAttributeLocalizedEnumValueGraphql } from '../../attribute-localized-enum-value/types';
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
  GraphqlModelBuilder().values(
    buildLimitGraphqlList<
      TAttributeLocalizedEnumValueGraphql,
      'LocalizableEnumValueTypeResult'
    >(
      [
        AttributeLocalizedEnumValueGraphql.presets.s(),
        AttributeLocalizedEnumValueGraphql.presets.m(),
      ],
      {
        __typename: 'LocalizableEnumValueTypeResult',
      }
    )
  );

export const compatPreset = (): TBuilder<TAttributeLocalizedEnumType> =>
  CompatModelBuilder().values([
    AttributeLocalizedEnumValue.presets.s(),
    AttributeLocalizedEnumValue.presets.m(),
  ]);
