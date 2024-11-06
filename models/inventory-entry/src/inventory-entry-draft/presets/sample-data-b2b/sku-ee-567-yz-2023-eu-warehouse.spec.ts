import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEe567Yz2023EuWarehouse preset`, () => {
  it(`should return a skuEe567Yz2023EuWarehouse preset when built for rest`, () => {
    const skuEe567Yz2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuEe567Yz2023EuWarehouse()
      .build();
    expect(skuEe567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2023EuWarehouse preset when built for graphql`, () => {
    const skuEe567Yz2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEe567Yz2023EuWarehouse()
      .build();
    expect(skuEe567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2023EuWarehouse preset when built for legacy rest`, () => {
    const skuEe567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEe567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuEe567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEe567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
