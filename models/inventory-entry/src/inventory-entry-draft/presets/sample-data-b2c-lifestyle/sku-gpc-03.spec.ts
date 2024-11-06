import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGpc03 preset`, () => {
  it(`should return a skuGpc03 preset when built for rest`, () => {
    const skuGpc03Preset = InventoryEntryDraftRest.presets.skuGpc03().build();
    expect(skuGpc03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc03 preset when built for graphql`, () => {
    const skuGpc03Preset = InventoryEntryDraftGraphql.presets
      .skuGpc03()
      .build();
    expect(skuGpc03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc03 preset when built for legacy rest`, () => {
    const skuGpc03Preset = InventoryEntryDraft.presets
      .skuGpc03()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGpc03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc03 preset when built for legacy graphql`, () => {
    const skuGpc03Preset = InventoryEntryDraft.presets
      .skuGpc03()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGpc03Preset).toMatchInlineSnapshot();
  });
});
