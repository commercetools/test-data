import { TZoneDraftBuilder } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyZoneDraft = empty().build<TZoneDraftBuilder>();
  expect(emptyZoneDraft.description).toMatchInlineSnapshot(`undefined`);
  expect(emptyZoneDraft.key).toMatchInlineSnapshot(`undefined`);
  expect(emptyZoneDraft.locations).toMatchInlineSnapshot(`undefined`);
});
