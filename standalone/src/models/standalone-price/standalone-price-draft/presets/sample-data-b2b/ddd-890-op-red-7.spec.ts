import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpRed7 from './ddd-890-op-red-7';

describe(`with ddd890OpRed7 preset`, () => {
  it(`should return a ddd890OpRed7 preset`, () => {
    const ddd890OpRed7Preset = ddd890OpRed7().build<TStandalonePriceDraft>();
    expect(ddd890OpRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-7",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ddd890OpRed7 preset when built for graphql`, () => {
    const ddd890OpRed7PresetGraphql =
      ddd890OpRed7().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-7",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
