import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20238 from './y-567-yz-2023-8';

describe(`with y567Yz20238 preset`, () => {
  it(`should return a y567Yz20238 preset`, () => {
    const y567Yz20238Preset = y567Yz20238().build<TStandalonePriceDraft>();
    expect(y567Yz20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-8",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2023",
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

  it(`should return a y567Yz20238 preset when built for graphql`, () => {
    const y567Yz20238PresetGraphql =
      y567Yz20238().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-8",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2023",
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
