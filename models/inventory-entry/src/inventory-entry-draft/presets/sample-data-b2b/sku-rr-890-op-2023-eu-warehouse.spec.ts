import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRr890Op2023EuWarehouse preset`, () => {
  it(`should return a skuRr890Op2023EuWarehouse preset when built for rest`, () => {
    const skuRr890Op2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuRr890Op2023EuWarehouse()
      .build();
    expect(skuRr890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2023EuWarehouse preset when built for graphql`, () => {
    const skuRr890Op2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuRr890Op2023EuWarehouse()
      .build();
    expect(skuRr890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2023EuWarehouse preset when built for legacy rest`, () => {
    const skuRr890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRr890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuRr890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRr890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
