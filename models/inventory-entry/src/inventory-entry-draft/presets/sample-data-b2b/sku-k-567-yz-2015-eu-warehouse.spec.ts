import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2015EuWarehouse preset`, () => {
  it(`should return a skuK567Yz2015EuWarehouse preset when built for rest`, () => {
    const skuK567Yz2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2015EuWarehouse()
      .build();
    expect(skuK567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015EuWarehouse preset when built for graphql`, () => {
    const skuK567Yz2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuK567Yz2015EuWarehouse()
      .build();
    expect(skuK567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015EuWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
