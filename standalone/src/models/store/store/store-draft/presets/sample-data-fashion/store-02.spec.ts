import { TStoreDraftGraphql, TStoreDraftRest } from '../../../types';
import { store02, store02Graphql, store02Rest } from './store-02';

describe('with `store02` preset', () => {
  it('should return a store draft preset for rest', () => {
    const storeDraft = store02Rest().buildRest<TStoreDraftRest>();
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

  it('should return a store graphql preset', () => {
    const storeDraft = store02Graphql().buildGraphql<TStoreDraftGraphql>();
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
  it('should return a store draft preset for graphql', () => {
    const storeDraft = store02().buildGraphql<TStoreDraftGraphql>();
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

  it('should return a store draft preset preset when built for graphql', () => {
    const storeDraft = store02().buildGraphql<TStoreDraftGraphql>();
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
