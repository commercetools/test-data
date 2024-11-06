import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX234Wx2019DefaultWarehouse preset`, () => {
  it(`should return a skuX234Wx2019DefaultWarehouse preset when built for rest`, () => {
    const skuX234Wx2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuX234Wx2019DefaultWarehouse()
      .build();
    expect(skuX234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2019DefaultWarehouse preset when built for graphql`, () => {
    const skuX234Wx2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuX234Wx2019DefaultWarehouse()
        .build();
    expect(skuX234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuX234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuX234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
