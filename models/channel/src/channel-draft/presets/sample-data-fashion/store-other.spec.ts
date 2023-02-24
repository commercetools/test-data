import { TChannelDraft, TChannelDraftGraphql } from '../../../types';
import storeOther from './store-other';

describe('store-other channel', () => {
  it('should match REST snapshot', () => {
    const channel = storeOther().build<TChannelDraft>();

    expect(channel.key).toMatchInlineSnapshot(`"store_other"`);
    expect(channel.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Store Other",
        "fr": undefined,
      }
    `);
    expect(channel.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Store Other",
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
    const channel = storeOther().buildGraphql<TChannelDraftGraphql>();

    expect(channel.key).toMatchInlineSnapshot(`"store_other"`);
    expect(channel.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Store Other",
        },
      ]
    `);
    expect(channel.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Store Other",
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
