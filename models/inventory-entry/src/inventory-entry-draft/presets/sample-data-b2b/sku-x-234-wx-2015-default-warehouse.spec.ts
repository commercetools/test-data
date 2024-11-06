import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX234Wx2015DefaultWarehouse preset`, () => {
  it(`should return a skuX234Wx2015DefaultWarehouse preset when built for rest`, () => {
    const skuX234Wx2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuX234Wx2015DefaultWarehouse()
      .build();
    expect(skuX234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2015DefaultWarehouse preset when built for graphql`, () => {
    const skuX234Wx2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuX234Wx2015DefaultWarehouse()
        .build();
    expect(skuX234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuX234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuX234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
