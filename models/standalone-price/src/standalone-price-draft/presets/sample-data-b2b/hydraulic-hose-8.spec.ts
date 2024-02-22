import type { TStandalonePriceDraft } from '../../../types';
import hydraulicHose8 from './hydraulic-hose-8';

describe(`with hydraulicHose8 preset`, () => {
  it(`should return a hydraulicHose8 preset`, () => {
    const hydraulicHose8Preset =
      hydraulicHose8().build<TStandalonePriceDraft>();
    expect(hydraulicHose8Preset).toMatchInlineSnapshot(`
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
        "key": "hydraulic-hose-8",
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hydraulicHose8 preset when built for graphql`, () => {
    const hydraulicHose8PresetGraphql =
      hydraulicHose8().buildGraphql<TStandalonePriceDraft>();
    expect(hydraulicHose8PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hydraulic-hose-8",
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
