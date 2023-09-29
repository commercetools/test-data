import { TCartDraft } from '../../../types';
import jenniferSchmidt01 from './jennnifer-schmidt-01';

describe('with the preset cart `jenniferSchmidt01`', () => {
  it('should return a cart draft', () => {
    const cartDraft = jenniferSchmidt01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = jenniferSchmidt01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = jenniferSchmidt01().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
