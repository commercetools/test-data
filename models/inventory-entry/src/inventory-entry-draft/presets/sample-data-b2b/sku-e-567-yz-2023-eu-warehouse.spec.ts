import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuE567Yz2023EuWarehouse preset`, () => {
  it(`should return a skuE567Yz2023EuWarehouse preset when built for rest`, () => {
    const skuE567Yz2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuE567Yz2023EuWarehouse()
      .build();
    expect(skuE567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2023EuWarehouse preset when built for graphql`, () => {
    const skuE567Yz2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuE567Yz2023EuWarehouse()
      .build();
    expect(skuE567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2023EuWarehouse preset when built for legacy rest`, () => {
    const skuE567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuE567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuE567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuE567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
