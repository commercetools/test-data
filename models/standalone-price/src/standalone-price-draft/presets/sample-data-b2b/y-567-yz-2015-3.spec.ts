import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20153 from './y-567-yz-2015-3';

describe(`with y567Yz20153 preset`, () => {
  it(`should return a y567Yz20153 preset`, () => {
    const y567Yz20153Preset = y567Yz20153().build<TStandalonePriceDraft>();
    expect(y567Yz20153Preset).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2015-3",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3036000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a y567Yz20153 preset when built for graphql`, () => {
    const y567Yz20153PresetGraphql =
      y567Yz20153().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2015-3",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3036000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
