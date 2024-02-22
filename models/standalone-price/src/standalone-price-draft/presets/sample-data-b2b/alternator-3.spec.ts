import type { TStandalonePriceDraft } from '../../../types';
import alternator3 from './alternator-3';

describe(`with alternator3 preset`, () => {
  it(`should return a alternator3 preset`, () => {
    const alternator3Preset = alternator3().build<TStandalonePriceDraft>();
    expect(alternator3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-3",
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 27500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a alternator3 preset when built for graphql`, () => {
    const alternator3PresetGraphql =
      alternator3().buildGraphql<TStandalonePriceDraft>();
    expect(alternator3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-3",
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 27500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
