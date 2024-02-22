import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20231 from './y-567-yz-2023-1';

describe(`with y567Yz20231 preset`, () => {
  it(`should return a y567Yz20231 preset`, () => {
    const y567Yz20231Preset = y567Yz20231().build<TStandalonePriceDraft>();
    expect(y567Yz20231Preset).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2023-1",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3036000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a y567Yz20231 preset when built for graphql`, () => {
    const y567Yz20231PresetGraphql =
      y567Yz20231().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2023-1",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3036000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
