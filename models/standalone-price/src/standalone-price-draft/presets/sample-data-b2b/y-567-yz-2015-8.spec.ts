import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20158 from './y-567-yz-2015-8';

describe(`with y567Yz20158 preset`, () => {
  it(`should return a y567Yz20158 preset`, () => {
    const y567Yz20158Preset = y567Yz20158().build<TStandalonePriceDraft>();
    expect(y567Yz20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-8",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2530000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a y567Yz20158 preset when built for graphql`, () => {
    const y567Yz20158PresetGraphql =
      y567Yz20158().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-8",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2530000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
