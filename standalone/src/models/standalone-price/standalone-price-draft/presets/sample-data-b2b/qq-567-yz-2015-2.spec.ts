import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20152 from './qq-567-yz-2015-2';

describe(`with qq567Yz20152 preset`, () => {
  it(`should return a qq567Yz20152 preset`, () => {
    const qq567Yz20152Preset = qq567Yz20152().build<TStandalonePriceDraft>();
    expect(qq567Yz20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2015-2",
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2475000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a qq567Yz20152 preset when built for graphql`, () => {
    const qq567Yz20152PresetGraphql =
      qq567Yz20152().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2015-2",
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2475000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
