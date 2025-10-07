import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
  TShippingMethodDraftRest,
} from '../types';
import * as empty from './empty';

describe('Empty preset', () => {
  it('[REST] should set all specified fields to undefined for REST model', () => {
    const emptyShippingMethodDraft = empty
      .restPreset()
      .build<TShippingMethodDraftRest>();
    expect(emptyShippingMethodDraft.key).toMatchInlineSnapshot(`undefined`);
    expect(emptyShippingMethodDraft.localizedName).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.localizedDescription).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.predicate).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.custom).toMatchInlineSnapshot(`undefined`);
  });

  it('[GraphQL] should set all specified fields to undefined for GraphQL model', () => {
    const emptyShippingMethodDraft = empty
      .graphqlPreset()
      .build<TShippingMethodDraftGraphql>();
    expect(emptyShippingMethodDraft.key).toMatchInlineSnapshot(`undefined`);
    expect(emptyShippingMethodDraft.localizedName).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.localizedDescription).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.predicate).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.custom).toMatchInlineSnapshot(`undefined`);
  });

  it('[Compat] should set all specified fields to undefined for compatibility model', () => {
    const emptyShippingMethodDraft = empty
      .compatPreset()
      .build<TShippingMethodDraft>();
    expect(emptyShippingMethodDraft.key).toMatchInlineSnapshot(`undefined`);
    expect(emptyShippingMethodDraft.localizedName).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.localizedDescription).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.predicate).toMatchInlineSnapshot(
      `undefined`
    );
    expect(emptyShippingMethodDraft.custom).toMatchInlineSnapshot(`undefined`);
  });
});
