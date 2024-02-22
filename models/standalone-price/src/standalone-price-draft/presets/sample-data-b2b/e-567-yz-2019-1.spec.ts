import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20191 from './e-567-yz-2019-1';

describe(`with e567Yz20191 preset`, () => {
  it(`should return a e567Yz20191 preset`, () => {
    const e567Yz20191Preset = e567Yz20191().build<TStandalonePriceDraft>();
    expect(e567Yz20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-1",
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1331000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a e567Yz20191 preset when built for graphql`, () => {
    const e567Yz20191PresetGraphql =
      e567Yz20191().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-1",
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1331000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
