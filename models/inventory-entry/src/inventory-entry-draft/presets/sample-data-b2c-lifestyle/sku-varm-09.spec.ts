import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVarm09 preset`, () => {
  it(`should return a skuVarm09 preset when built for rest`, () => {
    const skuVarm09Preset = InventoryEntryDraftRest.presets.skuVarm09().build();
    expect(skuVarm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuVarm09 preset when built for graphql`, () => {
    const skuVarm09Preset = InventoryEntryDraftGraphql.presets
      .skuVarm09()
      .build();
    expect(skuVarm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuVarm09 preset when built for legacy rest`, () => {
    const skuVarm09Preset = InventoryEntryDraft.presets
      .skuVarm09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVarm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuVarm09 preset when built for legacy graphql`, () => {
    const skuVarm09Preset = InventoryEntryDraft.presets
      .skuVarm09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVarm09Preset).toMatchInlineSnapshot();
  });
});
