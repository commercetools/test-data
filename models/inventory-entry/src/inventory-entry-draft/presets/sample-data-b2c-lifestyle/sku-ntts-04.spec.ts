import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNtts04 preset`, () => {
  it(`should return a skuNtts04 preset when built for rest`, () => {
    const skuNtts04Preset = InventoryEntryDraftRest.presets.skuNtts04().build();
    expect(skuNtts04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtts04 preset when built for graphql`, () => {
    const skuNtts04Preset = InventoryEntryDraftGraphql.presets
      .skuNtts04()
      .build();
    expect(skuNtts04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtts04 preset when built for legacy rest`, () => {
    const skuNtts04Preset = InventoryEntryDraft.presets
      .skuNtts04()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtts04Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtts04 preset when built for legacy graphql`, () => {
    const skuNtts04Preset = InventoryEntryDraft.presets
      .skuNtts04()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtts04Preset).toMatchInlineSnapshot();
  });
});
