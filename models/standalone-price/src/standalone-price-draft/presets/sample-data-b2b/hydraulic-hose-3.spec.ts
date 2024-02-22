import type { TStandalonePriceDraft } from '../../../types';
import hydraulicHose3 from './hydraulic-hose-3';

describe(`with hydraulicHose3 preset`, () => {
  it(`should return a hydraulicHose3 preset`, () => {
    const hydraulicHose3Preset =
      hydraulicHose3().build<TStandalonePriceDraft>();
    expect(hydraulicHose3Preset).toMatchInlineSnapshot(`
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
        "key": "hydraulic-hose-3",
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

  it(`should return a hydraulicHose3 preset when built for graphql`, () => {
    const hydraulicHose3PresetGraphql =
      hydraulicHose3().buildGraphql<TStandalonePriceDraft>();
    expect(hydraulicHose3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hydraulic-hose-3",
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
