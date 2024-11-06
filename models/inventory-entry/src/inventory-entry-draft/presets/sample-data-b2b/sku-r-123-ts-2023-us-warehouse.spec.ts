import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuR123Ts2023UsWarehouse preset`, () => {
  it(`should return a skuR123Ts2023UsWarehouse preset when built for rest`, () => {
    const skuR123Ts2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuR123Ts2023UsWarehouse()
      .build();
    expect(skuR123Ts2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2023UsWarehouse preset when built for graphql`, () => {
    const skuR123Ts2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuR123Ts2023UsWarehouse()
      .build();
    expect(skuR123Ts2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2023UsWarehouse preset when built for legacy rest`, () => {
    const skuR123Ts2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuR123Ts2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuR123Ts2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuR123Ts2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
