import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJ234Wx2015DefaultWarehouse preset`, () => {
  it(`should return a skuJ234Wx2015DefaultWarehouse preset when built for rest`, () => {
    const skuJ234Wx2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuJ234Wx2015DefaultWarehouse()
      .build();
    expect(skuJ234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2015DefaultWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuJ234Wx2015DefaultWarehouse()
        .build();
    expect(skuJ234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
