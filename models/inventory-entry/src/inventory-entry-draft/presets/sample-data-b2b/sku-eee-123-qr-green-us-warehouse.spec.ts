import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrGreenUsWarehouse preset`, () => {
  it(`should return a skuEee123QrGreenUsWarehouse preset when built for rest`, () => {
    const skuEee123QrGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuEee123QrGreenUsWarehouse()
      .build();
    expect(skuEee123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenUsWarehouse preset when built for graphql`, () => {
    const skuEee123QrGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEee123QrGreenUsWarehouse()
      .build();
    expect(skuEee123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
