import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2015Eu from './sku-z890-op-2015-eu';

describe(`with skuZ890Op2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuZ890Op2015Eu preset`, () => {
    const skuZ890Op2015EuPreset =
      skuZ890Op2015Eu().build<TInventoryEntryDraft>();
    expect(skuZ890Op2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZ890Op2015Eu preset when built for graphql`, () => {
    const skuZ890Op2015EuPresetGraphql =
      skuZ890Op2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
