/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import {
  Builder,
  fake,
  Generator,
  Transformer,
} from '@commercetools-test-data/core';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TReference, TReferenceGraphql, TReferenceRest } from './types';
import * as Reference from './index';

// We use this dummy model in the customization tests.
// It is a simple model so we don't need to depend on other models.
const DummyModel = () =>
  Builder<{ id: string; name: string }>({
    generator: Generator<{ id: string; name: string }>({
      fields: {
        id: fake((f) => f.string.uuid()),
        name: fake((f) => f.person.fullName()),
      },
    }),
    transformers: {
      default: Transformer('default', {}),
      rest: Transformer('rest', {}),
      graphql: Transformer('graphql', {}),
    },
  });

describe('builder', () => {
  it(
    ...createBuilderSpec<TReference, TReference>(
      'default',
      Reference.random(),
      {
        id: expect.any(String),
        typeId: null,
      }
    )
  );
  it(
    ...createBuilderSpec<TReference, TReferenceRest>(
      'rest',
      Reference.random().typeId('product'),
      {
        id: expect.any(String),
        typeId: 'product',
        obj: {
          id: expect.any(String),
        },
      }
    )
  );
  it(
    ...createBuilderSpec<TReference, TReferenceGraphql>(
      'graphql',
      Reference.random().typeId('product'),
      {
        __typename: 'Reference',
        id: expect.any(String),
        typeId: 'product',
      }
    )
  );

  describe('when customizing the model', () => {
    const referenceMock = Reference.random()
      .typeId('dummy-type')
      .obj(DummyModel().id('dummy-id').name('dummy-name'));

    it('should build the right rest model', () => {
      const restReference = referenceMock.buildRest<TReferenceRest>();
      console.log(restReference);
      expect(restReference).toEqual(
        expect.objectContaining({
          id: 'dummy-id',
          typeId: 'dummy-type',
          obj: {
            id: 'dummy-id',
            name: 'dummy-name',
          },
        })
      );
    });
    it('should build the right graphql model', () => {
      const graphqlReference = referenceMock.buildGraphql<TReferenceGraphql>();
      expect(graphqlReference).toEqual(
        expect.objectContaining({
          __typename: 'Reference',
          id: 'dummy-id',
          typeId: 'dummy-type',
        })
      );
      // @ts-expect-error "obj" is not defined in the graphql model
      // but we want to make sure the built model does not include it
      expect(graphqlReference.obj).toBeUndefined();
    });
  });
});
