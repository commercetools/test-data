import { TStoreDraft } from '../../../types';
import store03 from './store-03';

describe('with `store03` preset', () => {
  it('should return a store draft preset', () => {
    const storeDraft = store03().build<TStoreDraft>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_three",
        "languages": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Store Three",
          "fr": undefined,
        },
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });

  it('should return a store draft preset preset when built for graphql', () => {
    const storeDraft = store03().buildGraphql<TStoreDraft>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "sample_store_three",
        "languages": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Store Three",
          },
        ],
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });
});
