import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRr890Op2015EuWarehouse preset`, () => {
  it(`should return a skuRr890Op2015EuWarehouse preset when built for rest`, () => {
    const skuRr890Op2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuRr890Op2015EuWarehouse()
      .build();
    expect(skuRr890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015EuWarehouse preset when built for graphql`, () => {
    const skuRr890Op2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuRr890Op2015EuWarehouse()
      .build();
    expect(skuRr890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015EuWarehouse preset when built for legacy rest`, () => {
    const skuRr890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRr890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuRr890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRr890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
