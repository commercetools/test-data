import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrRed from './sku-yy-123-qr-red';

describe(`with skuYy123QrRed preset`, () => {
  it(`should return a skuYy123QrRed preset`, () => {
    const skuYy123QrRedPreset = skuYy123QrRed().build<TInventoryEntryDraft>();
    expect(skuYy123QrRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuYy123QrRed preset when built for graphql`, () => {
    const skuYy123QrRedPresetGraphql =
      skuYy123QrRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
