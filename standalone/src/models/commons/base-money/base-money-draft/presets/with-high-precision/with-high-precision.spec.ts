import { TBaseMoneyDraftGraphql } from '../../../types';
import { graphqlPreset } from './with-high-precision';

describe('BaseMoneyDraft Builder with high precision', () => {
  const validateModel = (
    model: TBaseMoneyDraftGraphql,
    currencyCode: string
  ) => {
    expect(model).toEqual(
      expect.objectContaining({
        highPrecision: expect.objectContaining({
          type: 'highPrecision',
          currencyCode: currencyCode,
          fractionDigits: expect.any(Number),
          preciseAmount: expect.any(Number),
        }),
      })
    );
  };

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = graphqlPreset().build();

    validateModel(graphqlModel, 'EUR');
  });

  it('should build properties for the GraphQL representation with custom currency code', () => {
    const graphqlModel = graphqlPreset({ currencyCode: 'USD' }).build();

    validateModel(graphqlModel, 'USD');
  });
});
