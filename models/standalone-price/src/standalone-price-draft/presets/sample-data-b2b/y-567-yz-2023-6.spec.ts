import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20236 from './y-567-yz-2023-6';

describe(`with y567Yz20236 preset`, () => {
  it(`should return a y567Yz20236 preset`, () => {
    const y567Yz20236Preset = y567Yz20236().build<TStandalonePriceDraft>();
    expect(y567Yz20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-6",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1840000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a y567Yz20236 preset when built for graphql`, () => {
    const y567Yz20236PresetGraphql =
      y567Yz20236().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-6",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1840000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
