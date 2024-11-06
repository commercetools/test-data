import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuXx890OpGreenUsWarehouse preset`, () => {
  it(`should return a skuXx890OpGreenUsWarehouse preset when built for rest`, () => {
    const skuXx890OpGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuXx890OpGreenUsWarehouse()
      .build();
    expect(skuXx890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenUsWarehouse preset when built for graphql`, () => {
    const skuXx890OpGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuXx890OpGreenUsWarehouse()
      .build();
    expect(skuXx890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuXx890OpGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuXx890OpGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
