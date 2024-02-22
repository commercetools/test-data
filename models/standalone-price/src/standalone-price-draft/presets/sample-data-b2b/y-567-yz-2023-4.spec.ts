import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20234 from './y-567-yz-2023-4';

describe(`with y567Yz20234 preset`, () => {
  it(`should return a y567Yz20234 preset`, () => {
    const y567Yz20234Preset = y567Yz20234().build<TStandalonePriceDraft>();
    expect(y567Yz20234Preset).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2023-4",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a y567Yz20234 preset when built for graphql`, () => {
    const y567Yz20234PresetGraphql =
      y567Yz20234().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20234PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2023-4",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
