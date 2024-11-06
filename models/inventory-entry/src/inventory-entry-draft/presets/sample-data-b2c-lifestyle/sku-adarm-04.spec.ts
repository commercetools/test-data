import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAdarm04 preset`, () => {
  it(`should return a skuAdarm04 preset when built for rest`, () => {
    const skuAdarm04Preset = InventoryEntryDraftRest.presets
      .skuAdarm04()
      .build();
    expect(skuAdarm04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdarm04 preset when built for graphql`, () => {
    const skuAdarm04Preset = InventoryEntryDraftGraphql.presets
      .skuAdarm04()
      .build();
    expect(skuAdarm04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdarm04 preset when built for legacy rest`, () => {
    const skuAdarm04Preset = InventoryEntryDraft.presets
      .skuAdarm04()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAdarm04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdarm04 preset when built for legacy graphql`, () => {
    const skuAdarm04Preset = InventoryEntryDraft.presets
      .skuAdarm04()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAdarm04Preset).toMatchInlineSnapshot();
  });
});
