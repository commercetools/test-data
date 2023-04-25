import type {
  TTaxCategoryDraft,
  TTaxCategoryDraftGraphql,
} from '../../../types';
import standardTaxCategory from './standard-tax-category';

describe('with a tax rate preset `standard tax category`', () => {
  it('should return a tax category with name `Standard Tax Category` and 6 tax rates', () => {
    const taxCategory = standardTaxCategory().build<TTaxCategoryDraft>();

    expect(taxCategory).toEqual(
      expect.objectContaining({
        key: expect.stringContaining('standard-tax'),
        name: expect.stringContaining('Standard Tax Category'),
        description: expect.any(String),
        rates: expect.arrayContaining([
          expect.objectContaining({
            name: 'VAT',
            amount: 0.19,
            includedInPrice: true,
            country: 'DE',
          }),
          expect.objectContaining({
            name: 'GST',
            amount: 0.1,
            includedInPrice: true,
            country: 'AU',
          }),
          expect.objectContaining({
            name: 'VAT',
            amount: 0.21,
            includedInPrice: true,
            country: 'ES',
          }),
          expect.objectContaining({
            name: 'MA State Tax',
            amount: 0.0625,
            includedInPrice: false,
            country: 'US',
            state: 'Massachusetts',
          }),
          expect.objectContaining({
            name: 'NJ Sales Tax',
            amount: 0.0663,
            includedInPrice: false,
            country: 'US',
            state: 'New Jersey',
          }),
          expect.objectContaining({
            name: 'CA Sales Tax',
            amount: 0.07,
            includedInPrice: false,
            country: 'US',
            state: 'California',
          }),
        ]),
      })
    );
  });
  it('should return a category with the name `Standard Tax Category` when built for GraphQL', () => {
    const taxCategory =
      standardTaxCategory().buildGraphql<TTaxCategoryDraftGraphql>();

    expect(taxCategory).toEqual(
      expect.objectContaining({
        key: expect.stringContaining('standard-tax'),
        name: expect.stringContaining('Standard Tax Category'),
        description: expect.any(String),
        rates: expect.arrayContaining([
          expect.objectContaining({
            name: 'VAT',
            amount: 0.19,
            includedInPrice: true,
            country: 'DE',
          }),
          expect.objectContaining({
            name: 'GST',
            amount: 0.1,
            includedInPrice: true,
            country: 'AU',
          }),
          expect.objectContaining({
            name: 'VAT',
            amount: 0.21,
            includedInPrice: true,
            country: 'ES',
          }),
          expect.objectContaining({
            name: 'MA State Tax',
            amount: 0.0625,
            includedInPrice: false,
            country: 'US',
            state: 'Massachusetts',
          }),
          expect.objectContaining({
            name: 'NJ Sales Tax',
            amount: 0.0663,
            includedInPrice: false,
            country: 'US',
            state: 'New Jersey',
          }),
          expect.objectContaining({
            name: 'CA Sales Tax',
            amount: 0.07,
            includedInPrice: false,
            country: 'US',
            state: 'California',
          }),
        ]),
      })
    );
  });
});
