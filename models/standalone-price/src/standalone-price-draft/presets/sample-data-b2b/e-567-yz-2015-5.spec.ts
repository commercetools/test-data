import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20155 from './e-567-yz-2015-5';

describe(`with e567Yz20155 preset`, () => {
  it(`should return a e567Yz20155 preset`, () => {
    const e567Yz20155Preset = e567Yz20155().build<TStandalonePriceDraft>();
    expect(e567Yz20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-5",
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a e567Yz20155 preset when built for graphql`, () => {
    const e567Yz20155PresetGraphql =
      e567Yz20155().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-5",
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
