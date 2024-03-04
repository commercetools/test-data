import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2023Eu from './sku-hh456-st-2023-eu';

describe(`with skuHh456St2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuHh456St2023Eu preset`, () => {
    const skuHh456St2023EuPreset =
      skuHh456St2023Eu().build<TInventoryEntryDraft>();
    expect(skuHh456St2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHh456St2023Eu preset when built for graphql`, () => {
    const skuHh456St2023EuPresetGraphql =
      skuHh456St2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
