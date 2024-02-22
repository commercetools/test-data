import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20198 from './k-567-yz-2019-8';

describe(`with k567Yz20198 preset`, () => {
  it(`should return a k567Yz20198 preset`, () => {
    const k567Yz20198Preset = k567Yz20198().build<TStandalonePriceDraft>();
    expect(k567Yz20198Preset).toMatchInlineSnapshot(`
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
        "key": "k567-yz-2019-8",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1430000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a k567Yz20198 preset when built for graphql`, () => {
    const k567Yz20198PresetGraphql =
      k567Yz20198().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20198PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "k567-yz-2019-8",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1430000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
