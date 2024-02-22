import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2019 from './sku-g-123-qr-2019';

describe(`with skuG123Qr2019 preset`, () => {
  it(`should return a skuG123Qr2019 preset`, () => {
    const skuG123Qr2019Preset = skuG123Qr2019().build<TInventoryEntryDraft>();
    expect(skuG123Qr2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2019 preset when built for graphql`, () => {
    const skuG123Qr2019PresetGraphql =
      skuG123Qr2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
