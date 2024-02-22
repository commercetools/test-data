import type { TInventoryEntryDraft } from '../../../types';
import skuPneumaticTire from './sku-pneumatic-tire';

describe(`with skuPneumaticTire preset`, () => {
  it(`should return a skuPneumaticTire preset`, () => {
    const skuPneumaticTirePreset =
      skuPneumaticTire().build<TInventoryEntryDraft>();
    expect(skuPneumaticTirePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPneumaticTire preset when built for graphql`, () => {
    const skuPneumaticTirePresetGraphql =
      skuPneumaticTire().buildGraphql<TInventoryEntryDraft>();
    expect(skuPneumaticTirePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": undefined,
      }
    `);
  });
});
