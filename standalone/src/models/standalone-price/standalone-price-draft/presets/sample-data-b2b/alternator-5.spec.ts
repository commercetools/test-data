import type { TStandalonePriceDraft } from '../../../types';
import alternator5 from './alternator-5';

describe(`with alternator5 preset`, () => {
  it(`should return a alternator5 preset`, () => {
    const alternator5Preset = alternator5().build<TStandalonePriceDraft>();
    expect(alternator5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-5",
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

  it(`should return a alternator5 preset when built for graphql`, () => {
    const alternator5PresetGraphql =
      alternator5().buildGraphql<TStandalonePriceDraft>();
    expect(alternator5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-5",
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
