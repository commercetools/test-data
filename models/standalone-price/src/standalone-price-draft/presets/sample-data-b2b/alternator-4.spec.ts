import type { TStandalonePriceDraft } from '../../../types';
import alternator4 from './alternator-4';

describe(`with alternator4 preset`, () => {
  it(`should return a alternator4 preset`, () => {
    const alternator4Preset = alternator4().build<TStandalonePriceDraft>();
    expect(alternator4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-4",
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

  it(`should return a alternator4 preset when built for graphql`, () => {
    const alternator4PresetGraphql =
      alternator4().buildGraphql<TStandalonePriceDraft>();
    expect(alternator4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-4",
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
