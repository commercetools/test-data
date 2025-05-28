import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20237 from './e-567-yz-2023-7';

describe(`with e567Yz20237 preset`, () => {
  it(`should return a e567Yz20237 preset`, () => {
    const e567Yz20237Preset = e567Yz20237().build<TStandalonePriceDraft>();
    expect(e567Yz20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2023-7",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a e567Yz20237 preset when built for graphql`, () => {
    const e567Yz20237PresetGraphql =
      e567Yz20237().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2023-7",
        "recurrencePolicy": undefined,
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
