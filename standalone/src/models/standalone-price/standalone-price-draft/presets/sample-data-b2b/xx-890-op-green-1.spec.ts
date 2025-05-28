import type { TStandalonePriceDraft } from '../../../types';
import xx890OpGreen1 from './xx-890-op-green-1';

describe(`with xx890OpGreen1 preset`, () => {
  it(`should return a xx890OpGreen1 preset`, () => {
    const xx890OpGreen1Preset = xx890OpGreen1().build<TStandalonePriceDraft>();
    expect(xx890OpGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-1",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6600000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a xx890OpGreen1 preset when built for graphql`, () => {
    const xx890OpGreen1PresetGraphql =
      xx890OpGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-1",
        "recurrencePolicy": undefined,
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6600000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
