import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX234Wx2023UsWarehouse preset`, () => {
  it(`should return a skuX234Wx2023UsWarehouse preset when built for rest`, () => {
    const skuX234Wx2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuX234Wx2023UsWarehouse()
      .build();
    expect(skuX234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2023UsWarehouse preset when built for graphql`, () => {
    const skuX234Wx2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuX234Wx2023UsWarehouse()
      .build();
    expect(skuX234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2023UsWarehouse preset when built for legacy rest`, () => {
    const skuX234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuX234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
