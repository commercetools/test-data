import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import b2cRetailStore from './b2c-retail-store';

describe('with `b2c-retail-store` preset', () => {
  it('should return a store draft preset', () => {
    const storeDraft = b2cRetailStore().build<TStoreDraftRest>();
    expect(storeDraft).toMatchInlineSnapshot(`
{
  "countries": undefined,
  "custom": undefined,
  "distributionChannels": undefined,
  "key": "b2c-retail-store",
  "languages": undefined,
  "name": {
    "de": undefined,
    "en": undefined,
    "en-GB": "B2C Retail Store",
    "en-US": "B2C Retail Store",
    "fr": undefined,
  },
  "productSelections": undefined,
  "supplyChannels": undefined,
}
`);
  });

  it('should return a store draft preset preset when built for graphql', () => {
    const storeDraft = b2cRetailStore().buildGraphql<TStoreDraftGraphql>();
    expect(storeDraft).toMatchInlineSnapshot(`
{
  "countries": undefined,
  "custom": undefined,
  "distributionChannels": undefined,
  "key": "b2c-retail-store",
  "languages": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "B2C Retail Store",
    },
    {
      "locale": "en-GB",
      "value": "B2C Retail Store",
    },
  ],
  "productSelections": undefined,
  "supplyChannels": undefined,
}
`);
  });
});
