import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20197 from './qq-567-yz-2019-7';

describe(`with qq567Yz20197 preset`, () => {
  it(`should return a qq567Yz20197 preset`, () => {
    const qq567Yz20197Preset = qq567Yz20197().build<TStandalonePriceDraft>();
    expect(qq567Yz20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-7",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a qq567Yz20197 preset when built for graphql`, () => {
    const qq567Yz20197PresetGraphql =
      qq567Yz20197().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-7",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
