import { TBuilder } from '@/core';
import { TCustomFieldsDraftGraphql, TCustomFieldsDraftRest } from '../../types';
import { CustomFieldsDraftRest, CustomFieldsDraftGraphql } from '../index';

export const restPreset = (): TBuilder<TCustomFieldsDraftRest> =>
  CustomFieldsDraftRest.random().fields({
    'boolean-field': true,
    'set-of-boolean-field': [true, false, true],
    'string-field': 'Any String value',
    'set-of-string-field': ['Some String value', 'Another String value'],
    'localized-string-field': {
      en: 'English text',
      es: 'texto en español',
    },
    'set-of-localized-string-field': [
      {
        en: 'English text 1',
        es: 'texto en español 1',
      },
      {
        en: 'English text 2',
        es: 'texto en español 2',
      },
    ],
    'enum-field': 'enum key defined in FieldDefinition',
    'set-of-enum-field': [
      'enum key defined in FieldDefinition-1',
      'enum key defined in FieldDefinition-2',
    ],
    'number-field': 42,
    'set-of-number-field': [1, 2, 7],
    'money-field': {
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 124500,
      fractionDigits: 2,
    },
    'set-of-money-field': [
      {
        type: 'centPrecision',
        currencyCode: 'USD',
        centAmount: 124500,
        fractionDigits: 2,
      },
      {
        type: 'centPrecision',
        currencyCode: 'USD',
        centAmount: 1000,
        fractionDigits: 2,
      },
    ],
    'date-field': '2001-10-12',
    'set-of-date-field': ['2001-10-12', '2015-03-14', '2003-05-15'],
    'time-field': '14:00:00.000',
    'set-of-time-field': ['14:00:00.000', '14:30:00.000'],
    'datetime-field': '2018-10-14T14:00:00.000Z',
    'set-of-datetime-field': [
      '2018-10-14T14:00:00.000Z',
      '2025-10-14T14:00:00.000Z',
    ],
    'reference-field': {
      typeId: 'product',
      id: 'd1229e6f-2b79-441e-b419-180311e52754',
    },
    'set-of-reference-field': [
      {
        typeId: 'product',
        id: 'd1229e6f-2b79-441e-b419-180311e52754',
      },
      {
        typeId: 'customer',
        id: 'e1549e6f-3b79-441e-c486-957480r23744',
      },
    ],
  });

export const graphqlPreset = (): TBuilder<TCustomFieldsDraftGraphql> =>
  CustomFieldsDraftGraphql.random().fields([
    { name: 'boolean-field', value: true },
    { name: 'set-of-boolean-field', value: [true, false, true] },
    { name: 'string-field', value: 'Any String value' },
    {
      name: 'set-of-string-field',
      value: ['Some String value', 'Another String value'],
    },
    {
      name: 'localized-string-field',
      value: {
        en: 'English text',
        es: 'texto en español',
      },
    },
    {
      name: 'set-of-localized-string-field',
      value: [
        {
          en: 'English text 1',
          es: 'texto en español 1',
        },
        {
          en: 'English text 2',
          es: 'texto en español 2',
        },
      ],
    },
    { name: 'enum-field', value: 'enum key defined in FieldDefinition' },
    {
      name: 'set-of-enum-field',
      value: [
        'enum key defined in FieldDefinition-1',
        'enum key defined in FieldDefinition-2',
      ],
    },
    { name: 'number-field', value: 42 },
    { name: 'set-of-number-field', value: [1, 2, 7] },
    {
      name: 'money-field',
      value: {
        type: 'centPrecision',
        currencyCode: 'USD',
        centAmount: 124500,
        fractionDigits: 2,
      },
    },
    {
      name: 'set-of-money-field',
      value: [
        {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 124500,
          fractionDigits: 2,
        },
        {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 1000,
          fractionDigits: 2,
        },
      ],
    },
    { name: 'date-field', value: '2001-10-12' },
    {
      name: 'set-of-date-field',
      value: ['2001-10-12', '2015-03-14', '2003-05-15'],
    },
    { name: 'time-field', value: '14:00:00.000' },
    { name: 'set-of-time-field', value: ['14:00:00.000', '14:30:00.000'] },
    { name: 'datetime-field', value: '2018-10-14T14:00:00.000Z' },
    {
      name: 'set-of-datetime-field',
      value: ['2018-10-14T14:00:00.000Z', '2025-10-14T14:00:00.000Z'],
    },
    {
      name: 'reference-field',
      value: {
        typeId: 'product',
        id: 'd1229e6f-2b79-441e-b419-180311e52754',
      },
    },
    {
      name: 'set-of-reference-field',
      value: [
        {
          typeId: 'product',
          id: 'd1229e6f-2b79-441e-b419-180311e52754',
        },
        {
          typeId: 'customer',
          id: 'e1549e6f-3b79-441e-c486-957480r23744',
        },
      ],
    },
    // post build will stringify the values so they match the expected stringified values
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ] as Array<{ name: string; value: any }>);
