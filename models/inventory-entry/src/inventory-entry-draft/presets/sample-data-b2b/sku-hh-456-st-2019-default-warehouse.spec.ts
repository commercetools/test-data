import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHh456St2019DefaultWarehouse preset`, () => {
  it(`should return a skuHh456St2019DefaultWarehouse preset when built for rest`, () => {
    const skuHh456St2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuHh456St2019DefaultWarehouse()
      .build();
    expect(skuHh456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2019DefaultWarehouse preset when built for graphql`, () => {
    const skuHh456St2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuHh456St2019DefaultWarehouse()
        .build();
    expect(skuHh456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
