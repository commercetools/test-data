import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2023EuWarehouse preset`, () => {
  it(`should return a skuK567Yz2023EuWarehouse preset when built for rest`, () => {
    const skuK567Yz2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2023EuWarehouse()
      .build();
    expect(skuK567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023EuWarehouse preset when built for graphql`, () => {
    const skuK567Yz2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuK567Yz2023EuWarehouse()
      .build();
    expect(skuK567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023EuWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
