import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2015 from './sku-g-123-qr-2015';

describe(`with skuG123Qr2015 preset`, () => {
  it(`should return a skuG123Qr2015 preset`, () => {
    const skuG123Qr2015Preset = skuG123Qr2015().build<TInventoryEntryDraft>();
    expect(skuG123Qr2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2015 preset when built for graphql`, () => {
    const skuG123Qr2015PresetGraphql =
      skuG123Qr2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
