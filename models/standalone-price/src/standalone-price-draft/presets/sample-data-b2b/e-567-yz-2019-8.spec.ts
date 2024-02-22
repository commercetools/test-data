import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20198 from './e-567-yz-2019-8';

describe(`with e567Yz20198 preset`, () => {
  it(`should return a e567Yz20198 preset`, () => {
    const e567Yz20198Preset = e567Yz20198().build<TStandalonePriceDraft>();
    expect(e567Yz20198Preset).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2019-8",
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a e567Yz20198 preset when built for graphql`, () => {
    const e567Yz20198PresetGraphql =
      e567Yz20198().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20198PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2019-8",
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
