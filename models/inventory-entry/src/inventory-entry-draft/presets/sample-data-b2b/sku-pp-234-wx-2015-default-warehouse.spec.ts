import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPp234Wx2015DefaultWarehouse preset`, () => {
  it(`should return a skuPp234Wx2015DefaultWarehouse preset when built for rest`, () => {
    const skuPp234Wx2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuPp234Wx2015DefaultWarehouse()
      .build();
    expect(skuPp234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015DefaultWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuPp234Wx2015DefaultWarehouse()
        .build();
    expect(skuPp234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
