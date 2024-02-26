import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20237 from './y-567-yz-2023-7';

describe(`with y567Yz20237 preset`, () => {
  it(`should return a y567Yz20237 preset`, () => {
    const y567Yz20237Preset = y567Yz20237().build<TStandalonePriceDraft>();
    expect(y567Yz20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-7",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2760000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a y567Yz20237 preset when built for graphql`, () => {
    const y567Yz20237PresetGraphql =
      y567Yz20237().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-7",
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2760000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
