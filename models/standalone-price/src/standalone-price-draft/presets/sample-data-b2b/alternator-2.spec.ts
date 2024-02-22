import type { TStandalonePriceDraft } from '../../../types';
import alternator2 from './alternator-2';

describe(`with alternator2 preset`, () => {
  it(`should return a alternator2 preset`, () => {
    const alternator2Preset = alternator2().build<TStandalonePriceDraft>();
    expect(alternator2Preset).toMatchInlineSnapshot(`
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
        "key": "alternator-2",
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 27500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a alternator2 preset when built for graphql`, () => {
    const alternator2PresetGraphql =
      alternator2().buildGraphql<TStandalonePriceDraft>();
    expect(alternator2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "alternator-2",
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 27500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
