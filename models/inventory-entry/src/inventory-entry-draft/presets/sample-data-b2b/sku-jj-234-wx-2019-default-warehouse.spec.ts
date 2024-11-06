import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJj234Wx2019DefaultWarehouse preset`, () => {
  it(`should return a skuJj234Wx2019DefaultWarehouse preset when built for rest`, () => {
    const skuJj234Wx2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuJj234Wx2019DefaultWarehouse()
      .build();
    expect(skuJj234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2019DefaultWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuJj234Wx2019DefaultWarehouse()
        .build();
    expect(skuJj234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
