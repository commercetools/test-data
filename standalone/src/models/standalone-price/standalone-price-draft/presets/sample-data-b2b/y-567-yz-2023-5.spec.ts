import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20235 from './y-567-yz-2023-5';

describe(`with y567Yz20235 preset`, () => {
  it(`should return a y567Yz20235 preset`, () => {
    const y567Yz20235Preset = y567Yz20235().build<TStandalonePriceDraft>();
    expect(y567Yz20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-5",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2070000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a y567Yz20235 preset when built for graphql`, () => {
    const y567Yz20235PresetGraphql =
      y567Yz20235().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-5",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2070000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
