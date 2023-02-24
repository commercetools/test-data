import { TChannelDraft, TChannelDraftGraphql } from '../../../types';
import hub from './hub';

describe('hub channel', () => {
  it('should match REST snapshot', () => {
    const channel = hub().build<TChannelDraft>();

    expect(channel.key).toMatchInlineSnapshot(`"hub"`);
    expect(channel.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Hub",
        "fr": undefined,
      }
    `);
    expect(channel.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Hub",
        "fr": undefined,
      }
    `);
    expect(channel.roles).toMatchInlineSnapshot(`
      [
        "ProductDistribution",
        "InventorySupply",
      ]
    `);
  });

  it('should match graphql snapshot', () => {
    const channel = hub().buildGraphql<TChannelDraftGraphql>();

    expect(channel.key).toMatchInlineSnapshot(`"hub"`);
    expect(channel.description).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Hub",
        },
      ]
    `);
    expect(channel.name).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Hub",
        },
      ]
    `);
    expect(channel.roles).toMatchInlineSnapshot(`
      [
        "ProductDistribution",
        "InventorySupply",
      ]
    `);
  });
});
