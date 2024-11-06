import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEarm04 preset`, () => {
  it(`should return a skuEarm04 preset when built for rest`, () => {
    const skuEarm04Preset = InventoryEntryDraftRest.presets.skuEarm04().build();
    expect(skuEarm04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEarm04 preset when built for graphql`, () => {
    const skuEarm04Preset = InventoryEntryDraftGraphql.presets
      .skuEarm04()
      .build();
    expect(skuEarm04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEarm04 preset when built for legacy rest`, () => {
    const skuEarm04Preset = InventoryEntryDraft.presets
      .skuEarm04()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEarm04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEarm04 preset when built for legacy graphql`, () => {
    const skuEarm04Preset = InventoryEntryDraft.presets
      .skuEarm04()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEarm04Preset).toMatchInlineSnapshot();
  });
});
