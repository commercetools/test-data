import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20197 from './k-567-yz-2019-7';

describe(`with k567Yz20197 preset`, () => {
  it(`should return a k567Yz20197 preset`, () => {
    const k567Yz20197Preset = k567Yz20197().build<TStandalonePriceDraft>();
    expect(k567Yz20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-7",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1560000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a k567Yz20197 preset when built for graphql`, () => {
    const k567Yz20197PresetGraphql =
      k567Yz20197().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-7",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1560000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
