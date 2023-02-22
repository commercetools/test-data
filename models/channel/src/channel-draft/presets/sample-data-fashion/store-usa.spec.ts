import { TChannelDraft, TChannelDraftGraphql } from '../../../types';
import storeUsa from './store-usa';

describe('store-usa channel', () => {
  it('should match REST snapshot', () => {
    const channel = storeUsa().build<TChannelDraft>();

    expect(channel.key).toMatchInlineSnapshot(`"store_usa"`);
    expect(channel.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "USA Store",
        "fr": undefined,
      }
    `);
    expect(channel.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "USA Store",
        "fr": undefined,
      }
    `);
    expect(channel.roles).toMatchInlineSnapshot(`
      [
        "ProductDistribution",
      ]
    `);
  });

  it('should match graphql snapshot', () => {
    const channel = storeUsa().buildGraphql<TChannelDraftGraphql>();

    expect(channel.key).toMatchInlineSnapshot(`"store_usa"`);
    expect(channel.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "USA Store",
        },
      ]
    `);
    expect(channel.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "USA Store",
        },
      ]
    `);
    expect(channel.roles).toMatchInlineSnapshot(`
      [
        "ProductDistribution",
      ]
    `);
  });
});
