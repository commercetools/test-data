import type { TStandalonePriceDraft } from '../../../types';
import xx890OpRed1 from './xx-890-op-red-1';

describe(`with xx890OpRed1 preset`, () => {
  it(`should return a xx890OpRed1 preset`, () => {
    const xx890OpRed1Preset = xx890OpRed1().build<TStandalonePriceDraft>();
    expect(xx890OpRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-1",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a xx890OpRed1 preset when built for graphql`, () => {
    const xx890OpRed1PresetGraphql =
      xx890OpRed1().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-1",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
