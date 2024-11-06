import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuR123Ts2015EuWarehouse preset`, () => {
  it(`should return a skuR123Ts2015EuWarehouse preset when built for rest`, () => {
    const skuR123Ts2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuR123Ts2015EuWarehouse()
      .build();
    expect(skuR123Ts2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2015EuWarehouse preset when built for graphql`, () => {
    const skuR123Ts2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuR123Ts2015EuWarehouse()
      .build();
    expect(skuR123Ts2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2015EuWarehouse preset when built for legacy rest`, () => {
    const skuR123Ts2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuR123Ts2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuR123Ts2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuR123Ts2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
