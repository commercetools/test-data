import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20154 from './qq-567-yz-2015-4';

describe(`with qq567Yz20154 preset`, () => {
  it(`should return a qq567Yz20154 preset`, () => {
    const qq567Yz20154Preset = qq567Yz20154().build<TStandalonePriceDraft>();
    expect(qq567Yz20154Preset).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2015-4",
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a qq567Yz20154 preset when built for graphql`, () => {
    const qq567Yz20154PresetGraphql =
      qq567Yz20154().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20154PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2015-4",
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
