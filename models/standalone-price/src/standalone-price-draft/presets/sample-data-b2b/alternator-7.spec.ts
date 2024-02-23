import type { TStandalonePriceDraft } from '../../../types';
import alternator7 from './alternator-7';

describe(`with alternator7 preset`, () => {
  it(`should return a alternator7 preset`, () => {
    const alternator7Preset = alternator7().build<TStandalonePriceDraft>();
    expect(alternator7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-7",
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

  it(`should return a alternator7 preset when built for graphql`, () => {
    const alternator7PresetGraphql =
      alternator7().buildGraphql<TStandalonePriceDraft>();
    expect(alternator7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-7",
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
