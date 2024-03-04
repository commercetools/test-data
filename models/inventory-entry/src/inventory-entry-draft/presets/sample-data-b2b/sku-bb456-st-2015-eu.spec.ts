import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2015Eu from './sku-bb456-st-2015-eu';

describe(`with skuBb456St2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuBb456St2015Eu preset`, () => {
    const skuBb456St2015EuPreset =
      skuBb456St2015Eu().build<TInventoryEntryDraft>();
    expect(skuBb456St2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2015Eu preset when built for graphql`, () => {
    const skuBb456St2015EuPresetGraphql =
      skuBb456St2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
