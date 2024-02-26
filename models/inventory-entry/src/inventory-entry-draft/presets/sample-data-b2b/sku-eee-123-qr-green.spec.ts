import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrGreen from './sku-eee-123-qr-green';

describe(`with skuEee123QrGreen preset`, () => {
  it(`should return a skuEee123QrGreen preset`, () => {
    const skuEee123QrGreenPreset =
      skuEee123QrGreen().build<TInventoryEntryDraft>();
    expect(skuEee123QrGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEee123QrGreen preset when built for graphql`, () => {
    const skuEee123QrGreenPresetGraphql =
      skuEee123QrGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
