import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSarm09 preset`, () => {
  it(`should return a skuSarm09 preset when built for rest`, () => {
    const skuSarm09Preset = InventoryEntryDraftRest.presets.skuSarm09().build();
    expect(skuSarm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSarm09 preset when built for graphql`, () => {
    const skuSarm09Preset = InventoryEntryDraftGraphql.presets
      .skuSarm09()
      .build();
    expect(skuSarm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSarm09 preset when built for legacy rest`, () => {
    const skuSarm09Preset = InventoryEntryDraft.presets
      .skuSarm09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSarm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSarm09 preset when built for legacy graphql`, () => {
    const skuSarm09Preset = InventoryEntryDraft.presets
      .skuSarm09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSarm09Preset).toMatchInlineSnapshot();
  });
});
