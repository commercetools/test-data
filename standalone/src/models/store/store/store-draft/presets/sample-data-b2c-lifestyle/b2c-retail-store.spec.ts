import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { restPreset, graphqlPreset, compatPreset } from './b2c-retail-store';

describe('with `b2c-retail-store` preset', () => {
  it('should return a b2c-retail-store REST preset object', () => {
    const storeDraft = restPreset().build<TStoreDraftRest>();
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
  it('should return a b2c-retail-store GraphQL preset object', () => {
    const storeDraft = graphqlPreset().build<TStoreDraftGraphql>();
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

  it('should return a b2c-retail-store REST preset object from compat preset', () => {
    const storeDraft = compatPreset().buildRest<TStoreDraftRest>();
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

  it('should return a b2c-retail-store GraphQL preset object from compat preset', () => {
    const storeDraft = compatPreset().buildGraphql<TStoreDraftGraphql>();
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
