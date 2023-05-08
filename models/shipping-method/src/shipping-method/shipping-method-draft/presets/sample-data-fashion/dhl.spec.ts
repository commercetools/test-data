import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
} from '../../../types';
import dhlShippingMethod from './dhl';

describe('with dhlShippingMethod preset', () => {
  it('should return a dhlShippingMethod preset', () => {
    const dhlShippingMethodPreset =
      dhlShippingMethod().build<TShippingMethodDraft>();
    expect(dhlShippingMethodPreset.key).toMatchInlineSnapshot(`"dhl"`);
    expect(dhlShippingMethodPreset.name).toMatchInlineSnapshot(`"DHL"`);
    expect(dhlShippingMethodPreset.localizedDescription).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "DHL",
        "fr": undefined,
      }
    `);
    expect(dhlShippingMethodPreset.taxCategory).toMatchInlineSnapshot(`
      {
        "key": "standard-tax",
        "typeId": "tax-category",
      }
    `);
    expect(dhlShippingMethodPreset.zoneRates).toMatchInlineSnapshot(`[]`);
    expect(dhlShippingMethodPreset.isDefault).toMatchInlineSnapshot(`true`);
  });

  it('should return a dhlShippingMethod preset when built for graphql', () => {
    const dhlShippingMethodPresetGraphql =
      dhlShippingMethod().buildGraphql<TShippingMethodDraftGraphql>();
    console.log(dhlShippingMethodPresetGraphql);
    expect(dhlShippingMethodPresetGraphql.key).toMatchInlineSnapshot(`"dhl"`);
    expect(dhlShippingMethodPresetGraphql.name).toMatchInlineSnapshot(`"DHL"`);
    expect(dhlShippingMethodPresetGraphql.localizedDescription)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "DHL",
        },
      ]
    `);
    expect(dhlShippingMethodPresetGraphql.taxCategory).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "standard-tax",
        "typeId": "tax-category",
      }
    `);
    expect(dhlShippingMethodPresetGraphql.zoneRates).toMatchInlineSnapshot(
      `[]`
    );
    expect(dhlShippingMethodPresetGraphql.isDefault).toMatchInlineSnapshot(
      `true`
    );
    expect(dhlShippingMethodPresetGraphql.__typename).toMatchInlineSnapshot(
      `"ShippingMethodDraft"`
    );
  });
});
