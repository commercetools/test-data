import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import johnDoe from './john-doe';

describe('with the preset `johnDoe`', () => {
  it('should return a address draft', () => {
    const address = johnDoe().build<TAddressDraft>();

    expect(address.firstName).toMatchInlineSnapshot(`"John"`);
    expect(address.lastName).toMatchInlineSnapshot(`"Doe"`);
    expect(address.streetName).toMatchInlineSnapshot(`"Center Road"`);
    expect(address.streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(address.postalCode).toMatchInlineSnapshot(`"34567"`);
    expect(address.city).toMatchInlineSnapshot(`"Center Town"`);
    expect(address.country).toMatchInlineSnapshot(`"DE"`);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = johnDoe().buildGraphql<TAddressDraftGraphql>();

    expect(address.firstName).toMatchInlineSnapshot(`"John"`);
    expect(address.lastName).toMatchInlineSnapshot(`"Doe"`);
    expect(address.streetName).toMatchInlineSnapshot(`"Center Road"`);
    expect(address.streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(address.postalCode).toMatchInlineSnapshot(`"34567"`);
    expect(address.city).toMatchInlineSnapshot(`"Center Town"`);
    expect(address.country).toMatchInlineSnapshot(`"DE"`);
  });
});
