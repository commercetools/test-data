import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20231 from './qq-567-yz-2023-1';

describe(`with qq567Yz20231 preset`, () => {
  it(`should return a qq567Yz20231 preset`, () => {
    const qq567Yz20231Preset = qq567Yz20231().build<TStandalonePriceDraft>();
    expect(qq567Yz20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a qq567Yz20231 preset when built for graphql`, () => {
    const qq567Yz20231PresetGraphql =
      qq567Yz20231().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
