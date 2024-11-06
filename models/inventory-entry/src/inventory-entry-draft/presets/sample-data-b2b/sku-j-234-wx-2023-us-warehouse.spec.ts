import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJ234Wx2023UsWarehouse preset`, () => {
  it(`should return a skuJ234Wx2023UsWarehouse preset when built for rest`, () => {
    const skuJ234Wx2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuJ234Wx2023UsWarehouse()
      .build();
    expect(skuJ234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2023UsWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJ234Wx2023UsWarehouse()
      .build();
    expect(skuJ234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2023UsWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
