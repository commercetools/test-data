import { TBuilder } from '@/core';
import {
  CustomFieldsRest,
  CustomFieldsGraphql,
  RawCustomFieldGraphql,
} from '../index';
import { TCustomFieldsGraphql, TCustomFieldsRest } from '../types';

export const restPreset = (): TBuilder<TCustomFieldsRest> =>
  CustomFieldsRest.random().fields({
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

export const graphqlPreset = (): TBuilder<TCustomFieldsGraphql> =>
  CustomFieldsGraphql.random().customFieldsRaw([
    RawCustomFieldGraphql.random().name('boolean-field').value(true),
    RawCustomFieldGraphql.random()
      .name('set-of-boolean-field')
      .value([true, false, true]),
    RawCustomFieldGraphql.random()
      .name('string-field')
      .value('Any String value'),
    RawCustomFieldGraphql.random()
      .name('set-of-string-field')
      .value(['Some String value', 'Another String value']),
    RawCustomFieldGraphql.random().name('localized-string-field').value({
      en: 'English text',
      es: 'texto en español',
    }),
    RawCustomFieldGraphql.random()
      .name('set-of-localized-string-field')
      .value([
        {
          en: 'English text 1',
          es: 'texto en español 1',
        },
        {
          en: 'English text 2',
          es: 'texto en español 2',
        },
      ]),
    RawCustomFieldGraphql.random()
      .name('enum-field')
      .value('enum key defined in FieldDefinition'),
    RawCustomFieldGraphql.random()
      .name('set-of-enum-field')
      .value([
        'enum key defined in FieldDefinition-1',
        'enum key defined in FieldDefinition-2',
      ]),
    RawCustomFieldGraphql.random().name('number-field').value(42),
    RawCustomFieldGraphql.random().name('set-of-number-field').value([1, 2, 7]),
    RawCustomFieldGraphql.random().name('money-field').value({
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 124500,
      fractionDigits: 2,
    }),
    RawCustomFieldGraphql.random()
      .name('set-of-money-field')
      .value([
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
      ]),
    RawCustomFieldGraphql.random().name('date-field').value('2001-10-12'),
    RawCustomFieldGraphql.random()
      .name('set-of-date-field')
      .value(['2001-10-12', '2015-03-14', '2003-05-15']),
    RawCustomFieldGraphql.random().name('time-field').value('14:00:00.000'),
    RawCustomFieldGraphql.random()
      .name('set-of-time-field')
      .value(['14:00:00.000', '14:30:00.000']),
    RawCustomFieldGraphql.random()
      .name('datetime-field')
      .value('2018-10-14T14:00:00.000Z'),
    RawCustomFieldGraphql.random()
      .name('set-of-datetime-field')
      .value(['2018-10-14T14:00:00.000Z', '2025-10-14T14:00:00.000Z']),
    RawCustomFieldGraphql.random().name('reference-field').value({
      typeId: 'product',
      id: 'd1229e6f-2b79-441e-b419-180311e52754',
    }),
    RawCustomFieldGraphql.random()
      .name('set-of-reference-field')
      .value([
        {
          typeId: 'product',
          id: 'd1229e6f-2b79-441e-b419-180311e52754',
        },
        {
          typeId: 'customer',
          id: 'e1549e6f-3b79-441e-c486-957480r23744',
        },
      ]),
  ]);
