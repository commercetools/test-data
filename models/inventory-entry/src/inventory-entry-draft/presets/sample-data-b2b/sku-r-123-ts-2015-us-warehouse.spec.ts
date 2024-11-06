import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuR123Ts2015UsWarehouse preset`, () => {
  it(`should return a skuR123Ts2015UsWarehouse preset when built for rest`, () => {
    const skuR123Ts2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuR123Ts2015UsWarehouse()
      .build();
    expect(skuR123Ts2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2015UsWarehouse preset when built for graphql`, () => {
    const skuR123Ts2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuR123Ts2015UsWarehouse()
      .build();
    expect(skuR123Ts2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2015UsWarehouse preset when built for legacy rest`, () => {
    const skuR123Ts2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuR123Ts2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuR123Ts2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuR123Ts2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
