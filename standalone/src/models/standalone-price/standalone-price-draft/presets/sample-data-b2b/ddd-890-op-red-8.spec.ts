import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpRed8 from './ddd-890-op-red-8';

describe(`with ddd890OpRed8 preset`, () => {
  it(`should return a ddd890OpRed8 preset`, () => {
    const ddd890OpRed8Preset = ddd890OpRed8().build<TStandalonePriceDraft>();
    expect(ddd890OpRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-8",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8250001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ddd890OpRed8 preset when built for graphql`, () => {
    const ddd890OpRed8PresetGraphql =
      ddd890OpRed8().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-8",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8250001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
