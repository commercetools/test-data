import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzRedDefaultWarehouse preset`, () => {
  it(`should return a skuWw567YzRedDefaultWarehouse preset when built for rest`, () => {
    const skuWw567YzRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuWw567YzRedDefaultWarehouse()
      .build();
    expect(skuWw567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedDefaultWarehouse preset when built for graphql`, () => {
    const skuWw567YzRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuWw567YzRedDefaultWarehouse()
        .build();
    expect(skuWw567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
