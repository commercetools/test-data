import { TCustomFieldsDraftGraphql, TCustomFieldsDraftRest } from '../../types';
import { restPreset, graphqlPreset } from './with-all-field-types';

const expectedFieldNames = [
  'boolean-field',
  'set-of-boolean-field',
  'string-field',
  'set-of-string-field',
  'localized-string-field',
  'set-of-localized-string-field',
  'enum-field',
  'set-of-enum-field',
  'number-field',
  'set-of-number-field',
  'money-field',
  'set-of-money-field',
  'date-field',
  'time-field',
  'set-of-time-field',
  'set-of-date-field',
  'datetime-field',
  'set-of-datetime-field',
  'reference-field',
  'set-of-reference-field',
];

const customFieldsRestExpectation = (customFields: TCustomFieldsDraftRest) => {
  expect(customFields).toMatchObject({
    fields: expect.any(Object),
  });

  // Verify all expected fields are present
  expectedFieldNames.forEach((fieldName) => {
    expect(customFields.fields).toHaveProperty(fieldName);
  });

  // Verify specific field types and structures
  expect(typeof customFields.fields?.['boolean-field']).toBe('boolean');
  expect(Array.isArray(customFields.fields?.['set-of-boolean-field'])).toBe(
    true
  );
  expect(customFields.fields?.['set-of-boolean-field']).toHaveLength(3);

  expect(typeof customFields.fields?.['string-field']).toBe('string');
  expect(Array.isArray(customFields.fields?.['set-of-string-field'])).toBe(
    true
  );
  expect(customFields.fields?.['set-of-string-field']).toHaveLength(2);

  expect(customFields.fields?.['localized-string-field']).toEqual(
    expect.any(Object)
  );
  expect(
    Array.isArray(customFields.fields?.['set-of-localized-string-field'])
  ).toBe(true);
  expect(customFields.fields?.['set-of-localized-string-field']).toHaveLength(
    2
  );

  expect(typeof customFields.fields?.['enum-field']).toBe('string');
  expect(Array.isArray(customFields.fields?.['set-of-enum-field'])).toBe(true);
  expect(customFields.fields?.['set-of-enum-field']).toHaveLength(2);

  expect(typeof customFields.fields?.['number-field']).toBe('number');
  expect(Array.isArray(customFields.fields?.['set-of-number-field'])).toBe(
    true
  );
  expect(customFields.fields?.['set-of-number-field']).toHaveLength(3);

  expect(customFields.fields?.['money-field']).toEqual(
    expect.objectContaining({
      currencyCode: expect.any(String),
      centAmount: expect.any(Number),
    })
  );
  expect(Array.isArray(customFields.fields?.['set-of-money-field'])).toBe(true);
  expect(customFields.fields?.['set-of-money-field']).toHaveLength(2);

  expect(customFields.fields?.['date-field']).toEqual('2001-10-12');
  expect(customFields.fields?.['time-field']).toBe('14:00:00.000');
  expect(customFields.fields?.['set-of-time-field']).toEqual([
    '14:00:00.000',
    '14:30:00.000',
  ]);
  expect(Array.isArray(customFields.fields?.['set-of-date-field'])).toBe(true);
  expect(customFields.fields?.['set-of-date-field']).toHaveLength(3);

  expect(customFields.fields?.['datetime-field']).toEqual(
    '2018-10-14T14:00:00.000Z'
  );
  expect(Array.isArray(customFields.fields?.['set-of-datetime-field'])).toBe(
    true
  );
  expect(customFields.fields?.['set-of-datetime-field']).toHaveLength(2);

  expect(customFields.fields?.['reference-field']).toEqual(
    expect.objectContaining({
      typeId: expect.any(String),
      id: expect.any(String),
    })
  );
  expect(Array.isArray(customFields.fields?.['set-of-reference-field'])).toBe(
    true
  );
  expect(customFields.fields?.['set-of-reference-field']).toHaveLength(2);
};

const customFieldsGraphqlExpectation = (
  customFields: TCustomFieldsDraftGraphql
) => {
  expect(customFields).toMatchObject({
    fields: expect.any(Array),
  });

  expect(customFields.fields).toHaveLength(expectedFieldNames.length);

  // Verify all expected fields are present with correct structure
  expectedFieldNames.forEach((fieldName) => {
    expect(customFields.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: fieldName,
          value: expect.anything(),
        }),
      ])
    );
  });

  // Find specific fields and verify their types
  const booleanField = customFields.fields?.find(
    (f) => f.name === 'boolean-field'
  );
  expect(typeof JSON.parse(booleanField?.value ?? '')).toBe('boolean');

  const setBooleanField = customFields.fields?.find(
    (f) => f.name === 'set-of-boolean-field'
  );
  expect(Array.isArray(JSON.parse(setBooleanField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setBooleanField?.value ?? '')).toHaveLength(3);
  expect(JSON.parse(setBooleanField?.value ?? '')).toEqual(
    expect.arrayContaining([expect.any(Boolean)])
  );

  const stringField = customFields.fields?.find(
    (f) => f.name === 'string-field'
  );
  expect(JSON.parse(stringField?.value ?? '')).toEqual(expect.any(String));

  const setStringField = customFields.fields?.find(
    (f) => f.name === 'set-of-string-field'
  );
  expect(Array.isArray(JSON.parse(setStringField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setStringField?.value ?? '')).toHaveLength(2);
  expect(JSON.parse(setStringField?.value ?? '')).toEqual(
    expect.arrayContaining([expect.any(String)])
  );

  const localizedStringField = customFields.fields?.find(
    (f) => f.name === 'localized-string-field'
  );
  expect(JSON.parse(localizedStringField?.value ?? '')).toEqual(
    expect.any(Object)
  );

  const setLocalizedStringField = customFields.fields?.find(
    (f) => f.name === 'set-of-localized-string-field'
  );
  expect(Array.isArray(JSON.parse(setLocalizedStringField?.value ?? ''))).toBe(
    true
  );
  expect(JSON.parse(setLocalizedStringField?.value ?? '')).toHaveLength(2);
  expect(JSON.parse(setLocalizedStringField?.value ?? '')).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );

  const enumField = customFields.fields?.find((f) => f.name === 'enum-field');
  expect(JSON.parse(enumField?.value ?? '')).toEqual(expect.any(String));

  const setEnumField = customFields.fields?.find(
    (f) => f.name === 'set-of-enum-field'
  );
  expect(Array.isArray(JSON.parse(setEnumField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setEnumField?.value ?? '')).toHaveLength(2);
  expect(JSON.parse(setEnumField?.value ?? '')).toEqual(
    expect.arrayContaining([expect.any(String)])
  );

  const numberField = customFields.fields?.find(
    (f) => f.name === 'number-field'
  );
  expect(typeof JSON.parse(numberField?.value ?? '')).toBe('number');

  const setNumberField = customFields.fields?.find(
    (f) => f.name === 'set-of-number-field'
  );
  expect(Array.isArray(JSON.parse(setNumberField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setNumberField?.value ?? '')).toHaveLength(3);
  expect(JSON.parse(setNumberField?.value ?? '')).toEqual(
    expect.arrayContaining([expect.any(Number)])
  );

  const moneyField = customFields.fields?.find((f) => f.name === 'money-field');
  expect(JSON.parse(moneyField?.value ?? '')).toEqual(
    expect.objectContaining({
      currencyCode: expect.any(String),
      centAmount: expect.any(Number),
    })
  );

  const setMoneyField = customFields.fields?.find(
    (f) => f.name === 'set-of-money-field'
  );
  expect(Array.isArray(JSON.parse(setMoneyField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setMoneyField?.value ?? '')).toHaveLength(2);
  expect(JSON.parse(setMoneyField?.value ?? '')).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        currencyCode: expect.any(String),
        centAmount: expect.any(Number),
      }),
    ])
  );

  const dateField = customFields.fields?.find((f) => f.name === 'date-field');
  expect(JSON.parse(dateField?.value ?? '')).toEqual('2001-10-12');

  const setDateField = customFields.fields?.find(
    (f) => f.name === 'set-of-date-field'
  );
  expect(Array.isArray(JSON.parse(setDateField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setDateField?.value ?? '')).toHaveLength(3);
  expect(JSON.parse(setDateField?.value ?? '')).toEqual(
    expect.arrayContaining(['2015-03-14'])
  );

  const timeField = customFields.fields?.find((f) => f.name === 'time-field');
  expect(JSON.parse(timeField?.value ?? '')).toBe('14:00:00.000');

  const setTimeField = customFields.fields?.find(
    (f) => f.name === 'set-of-time-field'
  );
  expect(Array.isArray(JSON.parse(setTimeField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setTimeField?.value ?? '')).toHaveLength(2);
  expect(JSON.parse(setTimeField?.value ?? '')).toEqual([
    '14:00:00.000',
    '14:30:00.000',
  ]);

  const datetimeField = customFields.fields?.find(
    (f) => f.name === 'datetime-field'
  );
  expect(JSON.parse(datetimeField?.value ?? '')).toEqual(
    '2018-10-14T14:00:00.000Z'
  );

  const setDatetimeField = customFields.fields?.find(
    (f) => f.name === 'set-of-datetime-field'
  );
  expect(Array.isArray(JSON.parse(setDatetimeField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setDatetimeField?.value ?? '')).toHaveLength(2);
  expect(JSON.parse(setDatetimeField?.value ?? '')).toEqual(
    expect.arrayContaining(['2025-10-14T14:00:00.000Z'])
  );

  const referenceField = customFields.fields?.find(
    (f) => f.name === 'reference-field'
  );
  expect(JSON.parse(referenceField?.value ?? '')).toEqual(
    expect.objectContaining({
      typeId: expect.any(String),
      id: expect.any(String),
    })
  );

  const setReferenceField = customFields.fields?.find(
    (f) => f.name === 'set-of-reference-field'
  );
  expect(Array.isArray(JSON.parse(setReferenceField?.value ?? ''))).toBe(true);
  expect(JSON.parse(setReferenceField?.value ?? '')).toHaveLength(2);
  expect(JSON.parse(setReferenceField?.value ?? '')).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        typeId: expect.any(String),
        id: expect.any(String),
      }),
    ])
  );
};

describe('WithAllFieldTypes preset', () => {
  it('[REST] should build successfully with all field types', () => {
    const customFieldsDraft = restPreset().build();
    customFieldsRestExpectation(customFieldsDraft);
  });

  it('[REST] should have consistent field structure', () => {
    const customFieldsDraft1 = restPreset().build();
    const customFieldsDraft2 = restPreset().build();

    // Both should have the same field names
    expect(Object.keys(customFieldsDraft1.fields ?? {}).sort()).toEqual(
      Object.keys(customFieldsDraft2.fields ?? {}).sort()
    );
    expect(Object.keys(customFieldsDraft1.fields ?? {})).toEqual(
      expect.arrayContaining(expectedFieldNames)
    );
  });

  it('[GraphQL] should build successfully with all field types', () => {
    const customFieldsDraft = graphqlPreset().build();
    customFieldsGraphqlExpectation(customFieldsDraft);
  });

  it('[GraphQL] should have consistent field structure', () => {
    const customFieldsDraft1 = graphqlPreset().build();
    const customFieldsDraft2 = graphqlPreset().build();

    // Both should have the same field names
    const fieldNames1 =
      customFieldsDraft1.fields?.map((f) => f.name).sort() ?? [];
    const fieldNames2 =
      customFieldsDraft2.fields?.map((f) => f.name).sort() ?? [];

    expect(fieldNames1).toEqual(fieldNames2);
    expect(fieldNames1).toEqual(expect.arrayContaining(expectedFieldNames));
  });
});
