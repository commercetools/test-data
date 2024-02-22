import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrGreen from './sku-yy-123-qr-green';

describe(`with skuYy123QrGreen preset`, () => {
  it(`should return a skuYy123QrGreen preset`, () => {
    const skuYy123QrGreenPreset =
      skuYy123QrGreen().build<TInventoryEntryDraft>();
    expect(skuYy123QrGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuYy123QrGreen preset when built for graphql`, () => {
    const skuYy123QrGreenPresetGraphql =
      skuYy123QrGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
