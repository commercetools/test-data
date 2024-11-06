import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEe567Yz2015EuWarehouse preset`, () => {
  it(`should return a skuEe567Yz2015EuWarehouse preset when built for rest`, () => {
    const skuEe567Yz2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuEe567Yz2015EuWarehouse()
      .build();
    expect(skuEe567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2015EuWarehouse preset when built for graphql`, () => {
    const skuEe567Yz2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEe567Yz2015EuWarehouse()
      .build();
    expect(skuEe567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2015EuWarehouse preset when built for legacy rest`, () => {
    const skuEe567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEe567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuEe567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEe567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
