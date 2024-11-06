import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuR123Ts2023DefaultWarehouse preset`, () => {
  it(`should return a skuR123Ts2023DefaultWarehouse preset when built for rest`, () => {
    const skuR123Ts2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuR123Ts2023DefaultWarehouse()
      .build();
    expect(skuR123Ts2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2023DefaultWarehouse preset when built for graphql`, () => {
    const skuR123Ts2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuR123Ts2023DefaultWarehouse()
        .build();
    expect(skuR123Ts2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuR123Ts2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuR123Ts2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuR123Ts2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuR123Ts2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
