import { TBuilder } from '@/core';
import { TCustomFieldsDraftGraphql, TCustomFieldsDraftRest } from '../../types';
import { CustomFieldsDraftRest, CustomFieldsDraftGraphql } from '../index';

export const restPreset = (
  stringFieldName: string = 'stringField',
  stringValue: string = 'test value'
): TBuilder<TCustomFieldsDraftRest> =>
  CustomFieldsDraftRest.random().fields({
    [stringFieldName]: stringValue,
  });

export const graphqlPreset = (
  stringFieldName: string = 'stringField',
  stringValue: string = 'test value'
): TBuilder<TCustomFieldsDraftGraphql> =>
  CustomFieldsDraftGraphql.random().fields([
    { name: stringFieldName, value: stringValue },
  ]);
