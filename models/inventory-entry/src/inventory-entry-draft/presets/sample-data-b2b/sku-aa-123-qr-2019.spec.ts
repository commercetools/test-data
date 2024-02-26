import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2019 from './sku-aa-123-qr-2019';

describe(`with skuAa123Qr2019 preset`, () => {
  it(`should return a skuAa123Qr2019 preset`, () => {
    const skuAa123Qr2019Preset = skuAa123Qr2019().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAa123Qr2019 preset when built for graphql`, () => {
    const skuAa123Qr2019PresetGraphql =
      skuAa123Qr2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
