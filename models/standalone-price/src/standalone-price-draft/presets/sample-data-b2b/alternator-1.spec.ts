import type { TStandalonePriceDraft } from '../../../types';
import alternator1 from './alternator-1';

describe(`with alternator1 preset`, () => {
  it(`should return a alternator1 preset`, () => {
    const alternator1Preset = alternator1().build<TStandalonePriceDraft>();
    expect(alternator1Preset).toMatchInlineSnapshot(`
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
        "key": "alternator-1",
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 27500,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a alternator1 preset when built for graphql`, () => {
    const alternator1PresetGraphql =
      alternator1().buildGraphql<TStandalonePriceDraft>();
    expect(alternator1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "alternator-1",
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 27500,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
