import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNtss03 preset`, () => {
  it(`should return a skuNtss03 preset when built for rest`, () => {
    const skuNtss03Preset = InventoryEntryDraftRest.presets.skuNtss03().build();
    expect(skuNtss03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss03 preset when built for graphql`, () => {
    const skuNtss03Preset = InventoryEntryDraftGraphql.presets
      .skuNtss03()
      .build();
    expect(skuNtss03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss03 preset when built for legacy rest`, () => {
    const skuNtss03Preset = InventoryEntryDraft.presets
      .skuNtss03()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss03 preset when built for legacy graphql`, () => {
    const skuNtss03Preset = InventoryEntryDraft.presets
      .skuNtss03()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss03Preset).toMatchInlineSnapshot();
  });
});
