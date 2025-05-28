import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpRed6 from './ddd-890-op-red-6';

describe(`with ddd890OpRed6 preset`, () => {
  it(`should return a ddd890OpRed6 preset`, () => {
    const ddd890OpRed6Preset = ddd890OpRed6().build<TStandalonePriceDraft>();
    expect(ddd890OpRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-6",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ddd890OpRed6 preset when built for graphql`, () => {
    const ddd890OpRed6PresetGraphql =
      ddd890OpRed6().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-6",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
