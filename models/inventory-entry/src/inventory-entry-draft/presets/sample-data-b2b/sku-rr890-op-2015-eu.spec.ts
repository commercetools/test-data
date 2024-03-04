import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2015Eu from './sku-rr890-op-2015-eu';

describe(`with skuRr890Op2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuRr890Op2015Eu preset`, () => {
    const skuRr890Op2015EuPreset =
      skuRr890Op2015Eu().build<TInventoryEntryDraft>();
    expect(skuRr890Op2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRr890Op2015Eu preset when built for graphql`, () => {
    const skuRr890Op2015EuPresetGraphql =
      skuRr890Op2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
