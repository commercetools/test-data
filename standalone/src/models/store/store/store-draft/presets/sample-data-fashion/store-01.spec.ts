import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { restPreset, graphqlPreset, compatPreset } from './store-01';

describe('with `store01` preset', () => {
  describe('with `store01Rest` preset', () => {
    const storeDraft = restPreset().buildRest<TStoreDraftRest>();
    it('should return a store-01 REST preset object', () => {
      expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_one",
        "languages": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Store One",
          "fr": undefined,
        },
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
      `);
    });
  });

  describe('with `store01Graphql` preset', () => {
    const storeDraft = graphqlPreset().buildGraphql<TStoreDraftGraphql>();
    it('should return a store-01 GraphQL preset object', () => {
      expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_one",
        "languages": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Store One",
          },
        ],
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
      `);
    });
  });

  it('should return a store-01 REST preset object from compat preset', () => {
    const storeDraft = compatPreset().build<TStoreDraftRest>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_one",
        "languages": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Store One",
          "fr": undefined,
        },
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });

  it('should return a store-01 GraphQL preset object from compat preset', () => {
    const storeDraft = compatPreset().buildGraphql<TStoreDraftGraphql>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_one",
        "languages": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Store One",
          },
        ],
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });
});
