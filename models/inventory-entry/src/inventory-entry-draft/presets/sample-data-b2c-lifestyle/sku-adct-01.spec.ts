import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAdct01 preset`, () => {
  it(`should return a skuAdct01 preset when built for rest`, () => {
    const skuAdct01Preset = InventoryEntryDraftRest.presets.skuAdct01().build();
    expect(skuAdct01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdct01 preset when built for graphql`, () => {
    const skuAdct01Preset = InventoryEntryDraftGraphql.presets
      .skuAdct01()
      .build();
    expect(skuAdct01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdct01 preset when built for legacy rest`, () => {
    const skuAdct01Preset = InventoryEntryDraft.presets
      .skuAdct01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAdct01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdct01 preset when built for legacy graphql`, () => {
    const skuAdct01Preset = InventoryEntryDraft.presets
      .skuAdct01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAdct01Preset).toMatchInlineSnapshot();
  });
});
