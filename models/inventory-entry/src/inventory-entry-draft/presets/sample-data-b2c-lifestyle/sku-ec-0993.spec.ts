import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEc0993 preset`, () => {
  it(`should return a skuEc0993 preset when built for rest`, () => {
    const skuEc0993Preset = InventoryEntryDraftRest.presets.skuEc0993().build();
    expect(skuEc0993Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEc0993 preset when built for graphql`, () => {
    const skuEc0993Preset = InventoryEntryDraftGraphql.presets
      .skuEc0993()
      .build();
    expect(skuEc0993Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEc0993 preset when built for legacy rest`, () => {
    const skuEc0993Preset = InventoryEntryDraft.presets
      .skuEc0993()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEc0993Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEc0993 preset when built for legacy graphql`, () => {
    const skuEc0993Preset = InventoryEntryDraft.presets
      .skuEc0993()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEc0993Preset).toMatchInlineSnapshot();
  });
});
