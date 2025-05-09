import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20191 from './k-567-yz-2019-1';

describe(`with k567Yz20191 preset`, () => {
  it(`should return a k567Yz20191 preset`, () => {
    const k567Yz20191Preset = k567Yz20191().build<TStandalonePriceDraft>();
    expect(k567Yz20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-1",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1573000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a k567Yz20191 preset when built for graphql`, () => {
    const k567Yz20191PresetGraphql =
      k567Yz20191().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-1",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1573000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
