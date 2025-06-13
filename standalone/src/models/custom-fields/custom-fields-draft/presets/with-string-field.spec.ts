import { TCustomFieldsDraftGraphql, TCustomFieldsDraftRest } from '../../types';
import { restPreset, graphqlPreset } from './with-string-field';

const customFieldsRestExpectation = (
  customFields: TCustomFieldsDraftRest,
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
  customFields: TCustomFieldsDraftGraphql,
  fieldName: string = 'stringField',
  fieldValue: string = 'test value'
) => {
  expect(customFields.fields).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: fieldName,
        value: JSON.stringify(fieldValue),
      }),
    ])
  );
};

describe('WithStringField preset', () => {
  it('[REST] should have string field with default values', () => {
    const customFieldsDraft = restPreset().build();
    customFieldsRestExpectation(customFieldsDraft);
  });

  it('[REST] should have string field with custom values', () => {
    const customFieldName = 'customStringField';
    const customValue = 'custom test value';
    const customFieldsDraft = restPreset(customFieldName, customValue).build();
    customFieldsRestExpectation(
      customFieldsDraft,
      customFieldName,
      customValue
    );
  });

  it('[GraphQL] should have string field with default values', () => {
    const customFieldsDraft = graphqlPreset().build();
    customFieldsGraphqlExpectation(customFieldsDraft);
  });

  it('[GraphQL] should have string field with custom values', () => {
    const customFieldName = 'customStringField';
    const customValue = 'custom test value';
    const customFieldsDraft = graphqlPreset(
      customFieldName,
      customValue
    ).build();
    customFieldsGraphqlExpectation(
      customFieldsDraft,
      customFieldName,
      customValue
    );
  });
});
