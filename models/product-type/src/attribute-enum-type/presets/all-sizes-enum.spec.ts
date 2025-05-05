import { TAttributeEnumTypeGraphql, TAttributeEnumTypeRest } from '../types';
import * as allSizesEnumPresets from './all-sizes-enum';

const validateRestModel = (model: TAttributeEnumTypeRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'enum',
      values: expect.arrayContaining([
        {
          key: 's',
          label: 'Size S',
        },
        {
          key: 'm',
          label: 'Size M',
        },
        {
          key: 'l',
          label: 'Size L',
        },
        {
          key: 'xl',
          label: 'Size XL',
        },
      ]),
    })
  );
};

const validateGraphqlModel = (model: TAttributeEnumTypeGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'enum',
      values: expect.objectContaining({
        results: [
          {
            key: 's',
            label: 'Size S',
            __typename: 'PlainEnumValue',
          },
          {
            key: 'm',
            label: 'Size M',
            __typename: 'PlainEnumValue',
          },
          {
            key: 'l',
            label: 'Size L',
            __typename: 'PlainEnumValue',
          },
          {
            key: 'xl',
            label: 'Size XL',
            __typename: 'PlainEnumValue',
          },
        ],
        total: 4,
        __typename: 'PlainEnumValueResult',
      }),
      __typename: 'EnumAttributeDefinitionType',
    })
  );
};

describe('AttributeEnumType model builders', () => {
  it('builds a REST model', () => {
    const restModel = allSizesEnumPresets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = allSizesEnumPresets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeEnumType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = allSizesEnumPresets.compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = allSizesEnumPresets.compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = allSizesEnumPresets
      .compatPreset()
      .buildGraphql<TAttributeEnumTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
