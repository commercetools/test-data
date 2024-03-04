import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2019Eu from './sku-z890-op-2019-eu';

describe(`with skuZ890Op2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuZ890Op2019Eu preset`, () => {
    const skuZ890Op2019EuPreset =
      skuZ890Op2019Eu().build<TInventoryEntryDraft>();
    expect(skuZ890Op2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZ890Op2019Eu preset when built for graphql`, () => {
    const skuZ890Op2019EuPresetGraphql =
      skuZ890Op2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
