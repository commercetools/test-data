import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNn456St2019DefaultWarehouse preset`, () => {
  it(`should return a skuNn456St2019DefaultWarehouse preset when built for rest`, () => {
    const skuNn456St2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuNn456St2019DefaultWarehouse()
      .build();
    expect(skuNn456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2019DefaultWarehouse preset when built for graphql`, () => {
    const skuNn456St2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuNn456St2019DefaultWarehouse()
        .build();
    expect(skuNn456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuNn456St2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNn456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuNn456St2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNn456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
