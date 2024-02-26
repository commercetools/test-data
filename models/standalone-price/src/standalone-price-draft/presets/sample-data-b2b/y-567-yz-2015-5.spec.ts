import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20155 from './y-567-yz-2015-5';

describe(`with y567Yz20155 preset`, () => {
  it(`should return a y567Yz20155 preset`, () => {
    const y567Yz20155Preset = y567Yz20155().build<TStandalonePriceDraft>();
    expect(y567Yz20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-5",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2070000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a y567Yz20155 preset when built for graphql`, () => {
    const y567Yz20155PresetGraphql =
      y567Yz20155().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-5",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2070000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
