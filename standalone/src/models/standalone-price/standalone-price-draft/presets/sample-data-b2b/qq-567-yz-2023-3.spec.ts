import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20233 from './qq-567-yz-2023-3';

describe(`with qq567Yz20233 preset`, () => {
  it(`should return a qq567Yz20233 preset`, () => {
    const qq567Yz20233Preset = qq567Yz20233().build<TStandalonePriceDraft>();
    expect(qq567Yz20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-3",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a qq567Yz20233 preset when built for graphql`, () => {
    const qq567Yz20233PresetGraphql =
      qq567Yz20233().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-3",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
