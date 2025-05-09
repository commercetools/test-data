import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20157 from './e-567-yz-2015-7';

describe(`with e567Yz20157 preset`, () => {
  it(`should return a e567Yz20157 preset`, () => {
    const e567Yz20157Preset = e567Yz20157().build<TStandalonePriceDraft>();
    expect(e567Yz20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-7",
        "sku": "e567-yz-2015",
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

  it(`should return a e567Yz20157 preset when built for graphql`, () => {
    const e567Yz20157PresetGraphql =
      e567Yz20157().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-7",
        "sku": "e567-yz-2015",
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
