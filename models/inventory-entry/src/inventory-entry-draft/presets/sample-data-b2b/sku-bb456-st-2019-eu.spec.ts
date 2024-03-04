import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2019Eu from './sku-bb456-st-2019-eu';

describe(`with skuBb456St2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuBb456St2019Eu preset`, () => {
    const skuBb456St2019EuPreset =
      skuBb456St2019Eu().build<TInventoryEntryDraft>();
    expect(skuBb456St2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2019Eu preset when built for graphql`, () => {
    const skuBb456St2019EuPresetGraphql =
      skuBb456St2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
