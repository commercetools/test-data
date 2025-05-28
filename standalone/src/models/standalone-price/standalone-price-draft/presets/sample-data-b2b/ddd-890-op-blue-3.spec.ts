import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpBlue3 from './ddd-890-op-blue-3';

describe(`with ddd890OpBlue3 preset`, () => {
  it(`should return a ddd890OpBlue3 preset`, () => {
    const ddd890OpBlue3Preset = ddd890OpBlue3().build<TStandalonePriceDraft>();
    expect(ddd890OpBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-3",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10725000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ddd890OpBlue3 preset when built for graphql`, () => {
    const ddd890OpBlue3PresetGraphql =
      ddd890OpBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-3",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10725000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
