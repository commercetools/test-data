import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBb456St2019DefaultWarehouse preset`, () => {
  it(`should return a skuBb456St2019DefaultWarehouse preset when built for rest`, () => {
    const skuBb456St2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuBb456St2019DefaultWarehouse()
      .build();
    expect(skuBb456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019DefaultWarehouse preset when built for graphql`, () => {
    const skuBb456St2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuBb456St2019DefaultWarehouse()
        .build();
    expect(skuBb456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuBb456St2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBb456St2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBb456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuBb456St2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBb456St2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBb456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
