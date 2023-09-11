import { TStoreDraft } from '../../../types';
import store02 from './store-01';

describe('with `store02` preset', () => {
  it('should return a store draft preset', () => {
    const storeDraft = store02().build<TStoreDraft>();
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
    const storeDraft = store02().buildGraphql<TStoreDraft>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "__typename": "StoreDraft",
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
