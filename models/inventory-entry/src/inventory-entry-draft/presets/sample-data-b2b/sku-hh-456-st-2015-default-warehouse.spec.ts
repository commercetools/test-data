import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHh456St2015DefaultWarehouse preset`, () => {
  it(`should return a skuHh456St2015DefaultWarehouse preset when built for rest`, () => {
    const skuHh456St2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuHh456St2015DefaultWarehouse()
      .build();
    expect(skuHh456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015DefaultWarehouse preset when built for graphql`, () => {
    const skuHh456St2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuHh456St2015DefaultWarehouse()
        .build();
    expect(skuHh456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
