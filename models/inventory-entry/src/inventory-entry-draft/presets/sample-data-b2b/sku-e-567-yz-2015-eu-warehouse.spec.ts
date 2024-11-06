import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuE567Yz2015EuWarehouse preset`, () => {
  it(`should return a skuE567Yz2015EuWarehouse preset when built for rest`, () => {
    const skuE567Yz2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuE567Yz2015EuWarehouse()
      .build();
    expect(skuE567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2015EuWarehouse preset when built for graphql`, () => {
    const skuE567Yz2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuE567Yz2015EuWarehouse()
      .build();
    expect(skuE567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2015EuWarehouse preset when built for legacy rest`, () => {
    const skuE567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuE567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuE567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuE567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
