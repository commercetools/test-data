import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import marySmith from './mary-smith';

describe('with the preset `marySmith`', () => {
  it('should return a address draft', () => {
    const address = marySmith().build<TAddressDraft>();

    expect(address.firstName).toMatchInlineSnapshot(`"Mary"`);
    expect(address.lastName).toMatchInlineSnapshot(`"Smith"`);
    expect(address.streetName).toMatchInlineSnapshot(`"Sample Street"`);
    expect(address.streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(address.postalCode).toMatchInlineSnapshot(`"12345"`);
    expect(address.city).toMatchInlineSnapshot(`"Sample Town"`);
    expect(address.country).toMatchInlineSnapshot(`"DE"`);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = marySmith().buildGraphql<TAddressDraftGraphql>();

    expect(address.firstName).toMatchInlineSnapshot(`"Mary"`);
    expect(address.lastName).toMatchInlineSnapshot(`"Smith"`);
    expect(address.streetName).toMatchInlineSnapshot(`"Sample Street"`);
    expect(address.streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(address.postalCode).toMatchInlineSnapshot(`"12345"`);
    expect(address.city).toMatchInlineSnapshot(`"Sample Town"`);
    expect(address.country).toMatchInlineSnapshot(`"DE"`);
  });
});
