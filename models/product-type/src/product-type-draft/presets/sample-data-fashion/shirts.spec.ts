import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import shirts from './shirts';

describe(`with shirts preset`, () => {
  it(`should create a shirts product type draft`, () => {
    const shirtsProductType = shirts().build<TProductTypeDraft>();
    expect(shirtsProductType).toEqual(
      expect.objectContaining({
        key: 'shirts',
        name: 'Shirts',
        description: 'Shirts',
        attributeDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: 'size',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Size',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Size',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Small',
                  label: 'Small',
                }),
                expect.objectContaining({
                  key: 'Medium',
                  label: 'Medium',
                }),
                expect.objectContaining({
                  key: 'Large',
                  label: 'Large',
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
                  key: 'Red',
                  label: 'Red',
                }),
                expect.objectContaining({
                  key: 'Green',
                  label: 'Green',
                }),
                expect.objectContaining({
                  key: 'Purple',
                  label: 'Purple',
                }),
                expect.objectContaining({
                  key: 'Multi-Color',
                  label: 'Multi-Color',
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
            name: 'size',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Size',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Size',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Small',
                  label: 'Small',
                }),
                expect.objectContaining({
                  key: 'Medium',
                  label: 'Medium',
                }),
                expect.objectContaining({
                  key: 'Large',
                  label: 'Large',
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
                  key: 'Red',
                  label: 'Red',
                }),
                expect.objectContaining({
                  key: 'Green',
                  label: 'Green',
                }),
                expect.objectContaining({
                  key: 'Purple',
                  label: 'Purple',
                }),
                expect.objectContaining({
                  key: 'Multi-Color',
                  label: 'Multi-Color',
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

  it(`should create a shirts product type draft when built for graphql`, () => {
    const shirtsProductTypeGraphql =
      shirts().buildGraphql<TProductTypeDraftGraphql>();
    expect(shirtsProductTypeGraphql).toEqual(
      expect.objectContaining({
        key: 'shirts',
        name: 'Shirts',
        description: 'Shirts',
        __typename: 'ProductTypeDraft',
        attributeDefinitions: [
          expect.objectContaining({
            name: 'size',
            label: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Size',
                __typename: 'LocalizedString',
              }),
            ]),
            inputTip: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Size',
                __typename: 'LocalizedString',
              }),
            ]),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              __typename: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Small',
                  label: 'Small',
                }),
                expect.objectContaining({
                  key: 'Medium',
                  label: 'Medium',
                }),
                expect.objectContaining({
                  key: 'Large',
                  label: 'Large',
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
                  key: 'Red',
                  label: 'Red',
                }),
                expect.objectContaining({
                  key: 'Green',
                  label: 'Green',
                }),
                expect.objectContaining({
                  key: 'Purple',
                  label: 'Purple',
                }),
                expect.objectContaining({
                  key: 'Multi-Color',
                  label: 'Multi-Color',
                }),
              ]),
            }),
            attributeConstraint: 'CombinationUnique',
            isSearchable: false,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
        ],
      })
    );
  });
});
