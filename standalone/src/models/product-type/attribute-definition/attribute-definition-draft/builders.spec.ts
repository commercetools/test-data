import { AttributeEnumTypeDraft } from '../../attribute-enum-type/attribute-enum-type-draft';
import { AttributePlainEnumValueDraft } from '../../attribute-plain-enum-value/attribute-plain-enum-value-draft';
import { AttributeTextTypeDraft } from '../../attribute-text-type/attribute-text-type-draft';
import * as constants from '../constants';
import {
  TAttributeDefinitionDraftGraphql,
  TAttributeDefinitionDraftRest,
} from '../types';
import {
  AttributeDefinitionDraft,
  AttributeDefinitionDraftGraphql,
  AttributeDefinitionDraftRest,
} from './index';

const validateRestModel = (model: TAttributeDefinitionDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: expect.stringFromArray(
        Object.values(constants.attributeConstraints)
      ),
      name: expect.any(String),
      inputHint: expect.stringFromArray(Object.values(constants.inputHints)),
      isRequired: expect.any(Boolean),
      isSearchable: expect.any(Boolean),
      type: expect.objectContaining({
        name: expect.any(String),
      }),
      label: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
      inputTip: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
    })
  );
};

const validateGraphqlModel = (
  model: TAttributeDefinitionDraftGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: expect.stringFromArray(
        Object.values(constants.attributeConstraints)
      ),
      name: expect.any(String),
      inputHint: expect.stringFromArray(Object.values(constants.inputHints)),
      isRequired: expect.any(Boolean),
      isSearchable: expect.any(Boolean),
      inputTip: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      label: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      // TODO: Not sure how to validate this property
      // type: expect.objectContaining({
      //   dummy: null,
      // }),
    })
  );
};

describe('AttributeDefinition model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeDefinitionDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeDefinitionDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDefinitionDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeDefinitionDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeDefinitionDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeDefinitionDraft.random().buildGraphql<TAttributeDefinitionDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });

  it('builds a GraphQL model with a text type', () => {
    const graphqlModel = AttributeDefinitionDraft.random()
      .type(AttributeTextTypeDraft.random().name('text'))
      .buildGraphql<TAttributeDefinitionDraftGraphql>();

    console.log('graphqlModel', graphqlModel);

    validateGraphqlModel(graphqlModel);
    expect(graphqlModel.type).toEqual({
      text: { dummy: null },
    });
  });

  it('builds a GraphQL model with an enum type', () => {
    const graphqlModel = AttributeDefinitionDraft.random()
      .type(
        AttributeEnumTypeDraft.random()
          .name('enum')
          .values([AttributePlainEnumValueDraft.random()])
      )
      .buildGraphql<TAttributeDefinitionDraftGraphql>();

    console.log('graphqlModel', graphqlModel);

    validateGraphqlModel(graphqlModel);
    expect(graphqlModel.type).toEqual(
      expect.objectContaining({
        enum: expect.objectContaining({
          values: expect.any(Array),
        }),
      })
    );
  });
});
