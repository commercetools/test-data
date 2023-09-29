import { TCartDraft } from '../../../types';
import sebastianMueller01 from './sebastian-mueller-01';

describe('with the preset cart `sebastianMueller01`', () => {
  it('should return a cart draft', () => {
    const cartDraft = sebastianMueller01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = sebastianMueller01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = sebastianMueller01().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
