import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJj234Wx2023DefaultWarehouse preset`, () => {
  it(`should return a skuJj234Wx2023DefaultWarehouse preset when built for rest`, () => {
    const skuJj234Wx2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuJj234Wx2023DefaultWarehouse()
      .build();
    expect(skuJj234Wx2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023DefaultWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuJj234Wx2023DefaultWarehouse()
        .build();
    expect(skuJj234Wx2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
