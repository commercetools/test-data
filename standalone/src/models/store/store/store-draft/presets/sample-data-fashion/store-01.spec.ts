import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { store01, store01Graphql, store01Rest } from './store-01';

describe('with `store01` preset', () => {
  describe('with `store01Rest` preset', () => {
    const storeDraft = store01Rest().buildRest<TStoreDraftRest>();
    it('should return a store draft preset', () => {
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
    const storeDraft = store01Graphql().buildGraphql<TStoreDraftGraphql>();
    it('should return a store draft preset', () => {
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

  it('should return a store draft preset', () => {
    const storeDraft = store01().build<TStoreDraftRest>();
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

  it('should return a store draft preset preset when built for graphql', () => {
    const storeDraft = store01().buildGraphql<TStoreDraftGraphql>();
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
