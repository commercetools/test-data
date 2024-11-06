import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuY567Yz2023EuWarehouse preset`, () => {
  it(`should return a skuY567Yz2023EuWarehouse preset when built for rest`, () => {
    const skuY567Yz2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuY567Yz2023EuWarehouse()
      .build();
    expect(skuY567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023EuWarehouse preset when built for graphql`, () => {
    const skuY567Yz2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuY567Yz2023EuWarehouse()
      .build();
    expect(skuY567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023EuWarehouse preset when built for legacy rest`, () => {
    const skuY567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuY567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuY567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuY567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
