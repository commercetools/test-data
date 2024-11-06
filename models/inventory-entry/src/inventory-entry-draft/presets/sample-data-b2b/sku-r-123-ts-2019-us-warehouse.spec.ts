import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuR123Ts2019UsWarehouse preset`, () => {
  it(`should return a skuR123Ts2019UsWarehouse preset when built for rest`, () => {
    const skuR123Ts2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuR123Ts2019UsWarehouse()
      .build();
    expect(skuR123Ts2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2019UsWarehouse preset when built for graphql`, () => {
    const skuR123Ts2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuR123Ts2019UsWarehouse()
      .build();
    expect(skuR123Ts2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2019UsWarehouse preset when built for legacy rest`, () => {
    const skuR123Ts2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuR123Ts2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuR123Ts2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuR123Ts2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
