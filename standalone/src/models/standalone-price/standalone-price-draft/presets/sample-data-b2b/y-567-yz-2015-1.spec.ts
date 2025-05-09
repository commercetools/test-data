import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20151 from './y-567-yz-2015-1';

describe(`with y567Yz20151 preset`, () => {
  it(`should return a y567Yz20151 preset`, () => {
    const y567Yz20151Preset = y567Yz20151().build<TStandalonePriceDraft>();
    expect(y567Yz20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-1",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2530000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a y567Yz20151 preset when built for graphql`, () => {
    const y567Yz20151PresetGraphql =
      y567Yz20151().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-1",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2530000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
