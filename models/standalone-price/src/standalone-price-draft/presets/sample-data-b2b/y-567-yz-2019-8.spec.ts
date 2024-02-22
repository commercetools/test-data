import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20198 from './y-567-yz-2019-8';

describe(`with y567Yz20198 preset`, () => {
  it(`should return a y567Yz20198 preset`, () => {
    const y567Yz20198Preset = y567Yz20198().build<TStandalonePriceDraft>();
    expect(y567Yz20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-8",
        "sku": "y567-yz-2019",
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

  it(`should return a y567Yz20198 preset when built for graphql`, () => {
    const y567Yz20198PresetGraphql =
      y567Yz20198().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-8",
        "sku": "y567-yz-2019",
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
