import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzRedDefaultWarehouse preset`, () => {
  it(`should return a skuCcc567YzRedDefaultWarehouse preset when built for rest`, () => {
    const skuCcc567YzRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuCcc567YzRedDefaultWarehouse()
      .build();
    expect(skuCcc567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedDefaultWarehouse preset when built for graphql`, () => {
    const skuCcc567YzRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuCcc567YzRedDefaultWarehouse()
        .build();
    expect(skuCcc567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
