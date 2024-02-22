import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20151 from './qq-567-yz-2015-1';

describe(`with qq567Yz20151 preset`, () => {
  it(`should return a qq567Yz20151 preset`, () => {
    const qq567Yz20151Preset = qq567Yz20151().build<TStandalonePriceDraft>();
    expect(qq567Yz20151Preset).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2015-1",
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a qq567Yz20151 preset when built for graphql`, () => {
    const qq567Yz20151PresetGraphql =
      qq567Yz20151().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20151PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "qq567-yz-2015-1",
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
