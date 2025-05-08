import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20191 from './qq-567-yz-2019-1';

describe(`with qq567Yz20191 preset`, () => {
  it(`should return a qq567Yz20191 preset`, () => {
    const qq567Yz20191Preset = qq567Yz20191().build<TStandalonePriceDraft>();
    expect(qq567Yz20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-1",
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a qq567Yz20191 preset when built for graphql`, () => {
    const qq567Yz20191PresetGraphql =
      qq567Yz20191().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-1",
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
