import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRst02 preset`, () => {
  it(`should return a skuRst02 preset when built for rest`, () => {
    const skuRst02Preset = InventoryEntryDraftRest.presets.skuRst02().build();
    expect(skuRst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRst02 preset when built for graphql`, () => {
    const skuRst02Preset = InventoryEntryDraftGraphql.presets
      .skuRst02()
      .build();
    expect(skuRst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRst02 preset when built for legacy rest`, () => {
    const skuRst02Preset = InventoryEntryDraft.presets
      .skuRst02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRst02 preset when built for legacy graphql`, () => {
    const skuRst02Preset = InventoryEntryDraft.presets
      .skuRst02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRst02Preset).toMatchInlineSnapshot();
  });
});
