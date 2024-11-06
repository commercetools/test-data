import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuH456St2015DefaultWarehouse preset`, () => {
  it(`should return a skuH456St2015DefaultWarehouse preset when built for rest`, () => {
    const skuH456St2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuH456St2015DefaultWarehouse()
      .build();
    expect(skuH456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015DefaultWarehouse preset when built for graphql`, () => {
    const skuH456St2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuH456St2015DefaultWarehouse()
        .build();
    expect(skuH456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuH456St2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuH456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuH456St2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuH456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
