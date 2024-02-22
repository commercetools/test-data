import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20196 from './y-567-yz-2019-6';

describe(`with y567Yz20196 preset`, () => {
  it(`should return a y567Yz20196 preset`, () => {
    const y567Yz20196Preset = y567Yz20196().build<TStandalonePriceDraft>();
    expect(y567Yz20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-6",
        "sku": "y567-yz-2019",
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

  it(`should return a y567Yz20196 preset when built for graphql`, () => {
    const y567Yz20196PresetGraphql =
      y567Yz20196().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-6",
        "sku": "y567-yz-2019",
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
