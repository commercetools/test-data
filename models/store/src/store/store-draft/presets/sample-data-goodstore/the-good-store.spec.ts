import { TStoreDraft } from '../../../types';
import theGoodStore from './the-good-store';

describe('with `the_good_store` preset', () => {
  it('should return a store draft preset', () => {
    const storeDraft = theGoodStore().build<TStoreDraft>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "the-good-store",
        "languages": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-GB": "The Good Store",
          "en-US": "The Good Store",
          "fr": undefined,
        },
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });

  it('should return a store draft preset preset when built for graphql', () => {
    const storeDraft = theGoodStore().buildGraphql<TStoreDraft>();
    expect(storeDraft).toMatchInlineSnapshot(`
      {
        "countries": undefined,
        "custom": undefined,
        "distributionChannels": undefined,
        "key": "the-good-store",
        "languages": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "The Good Store",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "The Good Store",
          },
        ],
        "productSelections": undefined,
        "supplyChannels": undefined,
      }
    `);
  });
});
