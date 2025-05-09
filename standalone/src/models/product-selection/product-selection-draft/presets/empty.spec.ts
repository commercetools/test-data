import { TProductSelectionDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyDraft = empty().build<TProductSelectionDraft>();
  expect(emptyDraft).toMatchObject({
    key: undefined,
    mode: undefined,
    custom: undefined,
  });
});
