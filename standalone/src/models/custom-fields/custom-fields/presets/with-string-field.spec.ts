import { TCustomFieldsGraphql, TCustomFieldsRest } from '../types';
import { restPreset, graphqlPreset } from './with-string-field';

const customFieldsRestExpectation = (
  customFields: TCustomFieldsRest,
  fieldName: string = 'stringField',
  fieldValue: string = 'test value'
) => {
  expect(customFields).toMatchObject({
    fields: expect.objectContaining({
      [fieldName]: fieldValue,
    }),
  });
};

const customFieldsGraphqlExpectation = (
  customFields: TCustomFieldsGraphql,
  fieldName: string = 'stringField',
  fieldValue: string = 'test value'
) => {
  expect(customFields.customFieldsRaw).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: fieldName,
        value: fieldValue,
      }),
    ])
  );
};

describe('WithStringField preset', () => {
  it('[REST] should have string field with default values', () => {
    const customFields = restPreset().build();
    customFieldsRestExpectation(customFields);
  });

  it('[REST] should have string field with custom values', () => {
    const customFieldName = 'customStringField';
    const customValue = 'custom test value';
    const customFields = restPreset(customFieldName, customValue).build();
    customFieldsRestExpectation(customFields, customFieldName, customValue);
  });

  it('[GraphQL] should have string field with default values', () => {
    const customFields = graphqlPreset().build();
    customFieldsGraphqlExpectation(customFields);
  });

  it('[GraphQL] should have string field with custom values', () => {
    const customFieldName = 'customStringField';
    const customValue = 'custom test value';
    const customFields = graphqlPreset(customFieldName, customValue).build();
    customFieldsGraphqlExpectation(customFields, customFieldName, customValue);
  });
});
