import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrRed from './sku-eee-123-qr-red';

describe(`with skuEee123QrRed preset`, () => {
  it(`should return a skuEee123QrRed preset`, () => {
    const skuEee123QrRedPreset = skuEee123QrRed().build<TInventoryEntryDraft>();
    expect(skuEee123QrRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEee123QrRed preset when built for graphql`, () => {
    const skuEee123QrRedPresetGraphql =
      skuEee123QrRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
