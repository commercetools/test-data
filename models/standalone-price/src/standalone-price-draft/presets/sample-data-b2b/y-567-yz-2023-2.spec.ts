import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20232 from './y-567-yz-2023-2';

describe(`with y567Yz20232 preset`, () => {
  it(`should return a y567Yz20232 preset`, () => {
    const y567Yz20232Preset = y567Yz20232().build<TStandalonePriceDraft>();
    expect(y567Yz20232Preset).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2023-2",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2783000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a y567Yz20232 preset when built for graphql`, () => {
    const y567Yz20232PresetGraphql =
      y567Yz20232().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2023-2",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2783000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
