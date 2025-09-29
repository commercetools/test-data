import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
  TShippingMethodDraftRest,
} from '../../types';
import * as empty from './empty';

describe('Empty preset', () => {
  it('should set all specified fields to undefined for REST model', () => {
    const emptyShippingMethodDraft = empty.restPreset().build();
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

  it('should set all specified fields to undefined for GraphQL model', () => {
    const emptyShippingMethodDraft = empty.graphqlPreset().build();
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

  it('should set all specified fields to undefined for compatibility model', () => {
    const emptyShippingMethodDraft = empty.compatPreset().build();
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
