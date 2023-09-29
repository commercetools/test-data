import { TCartDraft } from '../../../types';
import sebastianSmith01 from './sebastian-smith-01';

describe('with the preset cart `sebastianSmith01`', () => {
  it('should return a cart draft', () => {
    const cartDraft = sebastianSmith01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = sebastianSmith01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = sebastianSmith01().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
