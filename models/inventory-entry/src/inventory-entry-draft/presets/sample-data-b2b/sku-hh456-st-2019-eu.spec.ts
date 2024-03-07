import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2019Eu from './sku-hh456-st-2019-eu';

describe(`with skuHh456St2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuHh456St2019Eu preset`, () => {
    const skuHh456St2019EuPreset =
      skuHh456St2019Eu().build<TInventoryEntryDraft>();
    expect(skuHh456St2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHh456St2019Eu preset when built for graphql`, () => {
    const skuHh456St2019EuPresetGraphql =
      skuHh456St2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
