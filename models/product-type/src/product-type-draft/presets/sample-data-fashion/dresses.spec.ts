import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import dresses from './dresses';

describe(`with dresses preset`, () => {
  it(`should create a dresses product type draft`, () => {
    const dressesProductType = dresses().build<TProductTypeDraft>();
    expect(dressesProductType).toEqual(
      expect.objectContaining({
        key: 'dresses',
        name: 'Dresses',
        description: 'Dresses',
        attributeDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: 'length',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Length',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Length',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Maxi',
                  label: 'Maxi',
                }),
                expect.objectContaining({
                  key: 'Knee Length',
                  label: 'Knee Length',
                }),
                expect.objectContaining({
                  key: 'Mini',
                  label: 'Mini',
                }),
              ]),
            }),
            attributeConstraint: 'CombinationUnique',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
          expect.objectContaining({
            name: 'color',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Color',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Color',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'White',
                  label: 'White',
                }),
                expect.objectContaining({
                  key: 'Pink',
                  label: 'Pink',
                }),
                expect.objectContaining({
                  key: 'Floral',
                  label: 'Floral',
                }),
              ]),
            }),
            attributeConstraint: 'CombinationUnique',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            name: 'length',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Length',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Length',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Maxi',
                  label: 'Maxi',
                }),
                expect.objectContaining({
                  key: 'Knee Length',
                  label: 'Knee Length',
                }),
                expect.objectContaining({
                  key: 'Mini',
                  label: 'Mini',
                }),
              ]),
            }),
            attributeConstraint: 'CombinationUnique',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
          expect.objectContaining({
            name: 'color',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Color',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Color',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'White',
                  label: 'White',
                }),
                expect.objectContaining({
                  key: 'Pink',
                  label: 'Pink',
                }),
                expect.objectContaining({
                  key: 'Floral',
                  label: 'Floral',
                }),
              ]),
            }),
            attributeConstraint: 'CombinationUnique',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
        ]),
      })
    );
  });

  it(`should create a dresses product type draft when built for graphql`, () => {
    const dressesProductTypeGraphql =
      dresses().buildGraphql<TProductTypeDraftGraphql>();
    expect(dressesProductTypeGraphql).toEqual(
      expect.objectContaining({
        key: 'dresses',
        name: 'Dresses',
        description: 'Dresses',
        __typename: 'ProductTypeDraft',
        attributeDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: 'length',
            label: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Length',
                __typename: 'LocalizedString',
              }),
            ]),
            inputTip: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Length',
                __typename: 'LocalizedString',
              }),
            ]),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              __typename: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Maxi',
                  label: 'Maxi',
                }),
                expect.objectContaining({
                  key: 'Knee Length',
                  label: 'Knee Length',
                }),
                expect.objectContaining({
                  key: 'Mini',
                  label: 'Mini',
                }),
              ]),
            }),
            attributeConstraint: 'CombinationUnique',
            isSearchable: false,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
          expect.objectContaining({
            name: 'color',
            label: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Color',
                __typename: 'LocalizedString',
              }),
            ]),
            inputTip: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Color',
                __typename: 'LocalizedString',
              }),
            ]),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              __typename: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'White',
                  label: 'White',
                }),
                expect.objectContaining({
                  key: 'Pink',
                  label: 'Pink',
                }),
                expect.objectContaining({
                  key: 'Floral',
                  label: 'Floral',
                }),
              ]),
            }),
            attributeConstraint: 'CombinationUnique',
            isSearchable: false,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
        ]),
      })
    );
  });
});
