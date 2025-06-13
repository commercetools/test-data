import { TBuilder } from '@/core';
import {
  CustomFieldsRest,
  CustomFieldsGraphql,
  RawCustomFieldGraphql,
} from '../index';
import { TCustomFieldsGraphql, TCustomFieldsRest } from '../types';

export const restPreset = (
  stringFieldName: string = 'stringField',
  stringValue: string = 'test value'
): TBuilder<TCustomFieldsRest> =>
  CustomFieldsRest.random().fields({
    [stringFieldName]: stringValue,
  });

export const graphqlPreset = (
  stringFieldName: string = 'stringField',
  stringValue: string = 'test value'
): TBuilder<TCustomFieldsGraphql> =>
  CustomFieldsGraphql.random().customFieldsRaw([
    RawCustomFieldGraphql.random().name(stringFieldName).value(stringValue),
  ]);
