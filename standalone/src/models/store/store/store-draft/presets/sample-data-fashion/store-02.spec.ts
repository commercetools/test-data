import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { restPreset, graphqlPreset, compatPreset } from './store-02';

describe('with `store02` preset', () => {
  it('should return a store-02 REST preset object', () => {
    const storeDraft = restPreset().buildRest<TStoreDraftRest>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_two",
        "languages": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Store Two",
          "fr": undefined,
        },
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });

  it('should return a store-02 GraphQL preset object', () => {
    const storeDraft = graphqlPreset().buildRest<TStoreDraftRest>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_two",
        "languages": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Store Two",
          },
        ],
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });
  it('should return a store-02 REST preset object from compat preset', () => {
    const storeDraft = compatPreset().buildGraphql<TStoreDraftGraphql>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_two",
        "languages": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Store Two",
          },
        ],
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });

  it('should return a store-02 GraphQL preset object from compat preset', () => {
    const storeDraft = compatPreset().buildGraphql<TStoreDraftGraphql>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_two",
        "languages": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Store Two",
          },
        ],
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });
});
