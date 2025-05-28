import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpGreen8 from './ddd-890-op-green-8';

describe(`with ddd890OpGreen8 preset`, () => {
  it(`should return a ddd890OpGreen8 preset`, () => {
    const ddd890OpGreen8Preset =
      ddd890OpGreen8().build<TStandalonePriceDraft>();
    expect(ddd890OpGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-8",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-green",
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

  it(`should return a ddd890OpGreen8 preset when built for graphql`, () => {
    const ddd890OpGreen8PresetGraphql =
      ddd890OpGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-8",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-green",
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
