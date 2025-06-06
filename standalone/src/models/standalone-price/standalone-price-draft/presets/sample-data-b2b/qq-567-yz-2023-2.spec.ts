import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20232 from './qq-567-yz-2023-2';

describe(`with qq567Yz20232 preset`, () => {
  it(`should return a qq567Yz20232 preset`, () => {
    const qq567Yz20232Preset = qq567Yz20232().build<TStandalonePriceDraft>();
    expect(qq567Yz20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-2",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a qq567Yz20232 preset when built for graphql`, () => {
    const qq567Yz20232PresetGraphql =
      qq567Yz20232().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-2",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
