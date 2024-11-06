import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAdpc7 preset`, () => {
  it(`should return a skuAdpc7 preset when built for rest`, () => {
    const skuAdpc7Preset = InventoryEntryDraftRest.presets.skuAdpc7().build();
    expect(skuAdpc7Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdpc7 preset when built for graphql`, () => {
    const skuAdpc7Preset = InventoryEntryDraftGraphql.presets
      .skuAdpc7()
      .build();
    expect(skuAdpc7Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdpc7 preset when built for legacy rest`, () => {
    const skuAdpc7Preset = InventoryEntryDraft.presets
      .skuAdpc7()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAdpc7Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdpc7 preset when built for legacy graphql`, () => {
    const skuAdpc7Preset = InventoryEntryDraft.presets
      .skuAdpc7()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAdpc7Preset).toMatchInlineSnapshot();
  });
});
