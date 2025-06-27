import { TBuilder } from '@/core';
import { TCustomFieldsDraftGraphql, TCustomFieldsDraftRest } from '../../types';
import { CustomFieldsDraftRest, CustomFieldsDraftGraphql } from '../index';

export const restPreset = (): TBuilder<TCustomFieldsDraftRest> =>
  CustomFieldsDraftRest.random().fields({
    stringField: 'test value',
  });

export const graphqlPreset = (): TBuilder<TCustomFieldsDraftGraphql> =>
  CustomFieldsDraftGraphql.random().fields([
    { name: 'stringField', value: 'test value' },
  ]);
