import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzGreenUsWarehouse preset`, () => {
  it(`should return a skuWw567YzGreenUsWarehouse preset when built for rest`, () => {
    const skuWw567YzGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuWw567YzGreenUsWarehouse()
      .build();
    expect(skuWw567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenUsWarehouse preset when built for graphql`, () => {
    const skuWw567YzGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuWw567YzGreenUsWarehouse()
      .build();
    expect(skuWw567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
