import { TCustomFieldsDraftGraphql, TCustomFieldsDraftRest } from '../../types';
import { restPreset, graphqlPreset } from './with-string-field';

const customFieldsRestExpectation = (customFields: TCustomFieldsDraftRest) => {
  expect(customFields).toMatchObject({
    fields: expect.objectContaining({
      stringField: 'test value',
    }),
  });
};

const customFieldsGraphqlExpectation = (
  customFields: TCustomFieldsDraftGraphql
) => {
  expect(customFields.fields).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'stringField',
        value: JSON.stringify('test value'),
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
    const customFieldsDraft = restPreset().build();
    customFieldsRestExpectation(customFieldsDraft);
  });

  it('[GraphQL] should have string field with default values', () => {
    const customFieldsDraft = graphqlPreset().build();
    customFieldsGraphqlExpectation(customFieldsDraft);
  });

  it('[GraphQL] should have string field with custom values', () => {
    const customFieldsDraft = graphqlPreset().build();
    customFieldsGraphqlExpectation(customFieldsDraft);
  });
});
