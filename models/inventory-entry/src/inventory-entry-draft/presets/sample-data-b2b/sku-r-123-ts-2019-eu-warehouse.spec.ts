import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuR123Ts2019EuWarehouse preset`, () => {
  it(`should return a skuR123Ts2019EuWarehouse preset when built for rest`, () => {
    const skuR123Ts2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuR123Ts2019EuWarehouse()
      .build();
    expect(skuR123Ts2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2019EuWarehouse preset when built for graphql`, () => {
    const skuR123Ts2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuR123Ts2019EuWarehouse()
      .build();
    expect(skuR123Ts2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2019EuWarehouse preset when built for legacy rest`, () => {
    const skuR123Ts2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuR123Ts2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuR123Ts2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuR123Ts2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuR123Ts2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuR123Ts2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
