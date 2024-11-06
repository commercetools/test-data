import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGarm093 preset`, () => {
  it(`should return a skuGarm093 preset when built for rest`, () => {
    const skuGarm093Preset = InventoryEntryDraftRest.presets
      .skuGarm093()
      .build();
    expect(skuGarm093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGarm093 preset when built for graphql`, () => {
    const skuGarm093Preset = InventoryEntryDraftGraphql.presets
      .skuGarm093()
      .build();
    expect(skuGarm093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGarm093 preset when built for legacy rest`, () => {
    const skuGarm093Preset = InventoryEntryDraft.presets
      .skuGarm093()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGarm093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGarm093 preset when built for legacy graphql`, () => {
    const skuGarm093Preset = InventoryEntryDraft.presets
      .skuGarm093()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGarm093Preset).toMatchInlineSnapshot();
  });
});
