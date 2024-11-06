import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNtss06 preset`, () => {
  it(`should return a skuNtss06 preset when built for rest`, () => {
    const skuNtss06Preset = InventoryEntryDraftRest.presets.skuNtss06().build();
    expect(skuNtss06Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss06 preset when built for graphql`, () => {
    const skuNtss06Preset = InventoryEntryDraftGraphql.presets
      .skuNtss06()
      .build();
    expect(skuNtss06Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss06 preset when built for legacy rest`, () => {
    const skuNtss06Preset = InventoryEntryDraft.presets
      .skuNtss06()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss06Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss06 preset when built for legacy graphql`, () => {
    const skuNtss06Preset = InventoryEntryDraft.presets
      .skuNtss06()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss06Preset).toMatchInlineSnapshot();
  });
});
