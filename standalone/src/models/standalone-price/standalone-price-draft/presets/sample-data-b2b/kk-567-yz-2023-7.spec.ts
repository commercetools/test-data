import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20237 from './kk-567-yz-2023-7';

describe(`with kk567Yz20237 preset`, () => {
  it(`should return a kk567Yz20237 preset`, () => {
    const kk567Yz20237Preset = kk567Yz20237().build<TStandalonePriceDraft>();
    expect(kk567Yz20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2023-7",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a kk567Yz20237 preset when built for graphql`, () => {
    const kk567Yz20237PresetGraphql =
      kk567Yz20237().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2023-7",
        "recurrencePolicy": undefined,
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
