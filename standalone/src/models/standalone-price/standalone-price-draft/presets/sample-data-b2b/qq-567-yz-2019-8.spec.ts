import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20198 from './qq-567-yz-2019-8';

describe(`with qq567Yz20198 preset`, () => {
  it(`should return a qq567Yz20198 preset`, () => {
    const qq567Yz20198Preset = qq567Yz20198().build<TStandalonePriceDraft>();
    expect(qq567Yz20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-8",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a qq567Yz20198 preset when built for graphql`, () => {
    const qq567Yz20198PresetGraphql =
      qq567Yz20198().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2019-8",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
