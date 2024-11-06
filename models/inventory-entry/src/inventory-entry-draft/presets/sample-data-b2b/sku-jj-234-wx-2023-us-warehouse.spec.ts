import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJj234Wx2023UsWarehouse preset`, () => {
  it(`should return a skuJj234Wx2023UsWarehouse preset when built for rest`, () => {
    const skuJj234Wx2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuJj234Wx2023UsWarehouse()
      .build();
    expect(skuJj234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023UsWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJj234Wx2023UsWarehouse()
      .build();
    expect(skuJj234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023UsWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
