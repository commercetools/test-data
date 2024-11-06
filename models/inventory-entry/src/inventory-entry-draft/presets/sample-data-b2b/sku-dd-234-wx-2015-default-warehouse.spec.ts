import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDd234Wx2015DefaultWarehouse preset`, () => {
  it(`should return a skuDd234Wx2015DefaultWarehouse preset when built for rest`, () => {
    const skuDd234Wx2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuDd234Wx2015DefaultWarehouse()
      .build();
    expect(skuDd234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015DefaultWarehouse preset when built for graphql`, () => {
    const skuDd234Wx2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuDd234Wx2015DefaultWarehouse()
        .build();
    expect(skuDd234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuDd234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDd234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuDd234Wx2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDd234Wx2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
