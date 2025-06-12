import { TBuilder } from '@/core';
import { TCtpRawCustomField } from '@/graphql-types';
import { CustomFieldsRest, CustomFieldsGraphql } from '../index';
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
    { name: stringFieldName, value: stringValue },
  ] as unknown as TCtpRawCustomField[]);
