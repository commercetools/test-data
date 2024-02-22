import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20155 from './qq-567-yz-2015-5';

describe(`with qq567Yz20155 preset`, () => {
  it(`should return a qq567Yz20155 preset`, () => {
    const qq567Yz20155Preset = qq567Yz20155().build<TStandalonePriceDraft>();
    expect(qq567Yz20155Preset).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2015-5",
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a qq567Yz20155 preset when built for graphql`, () => {
    const qq567Yz20155PresetGraphql =
      qq567Yz20155().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2015-5",
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
