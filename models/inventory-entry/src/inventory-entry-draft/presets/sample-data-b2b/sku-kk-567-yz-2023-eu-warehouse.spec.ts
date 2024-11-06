import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuKk567Yz2023EuWarehouse preset`, () => {
  it(`should return a skuKk567Yz2023EuWarehouse preset when built for rest`, () => {
    const skuKk567Yz2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuKk567Yz2023EuWarehouse()
      .build();
    expect(skuKk567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023EuWarehouse preset when built for graphql`, () => {
    const skuKk567Yz2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuKk567Yz2023EuWarehouse()
      .build();
    expect(skuKk567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023EuWarehouse preset when built for legacy rest`, () => {
    const skuKk567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuKk567Yz2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuKk567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuKk567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuKk567Yz2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuKk567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
