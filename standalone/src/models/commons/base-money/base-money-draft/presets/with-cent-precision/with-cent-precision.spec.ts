import { TBaseMoneyDraftGraphql } from '../../../types';
import { graphqlPreset } from './with-cent-precision';

describe('BaseMoneyDraft Builder with cent precision', () => {
  const validateModel = (
    model: TBaseMoneyDraftGraphql,
    currencyCode: string
  ) => {
    expect(model).toEqual(
      expect.objectContaining({
        centPrecision: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: currencyCode,
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
