import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import pants from './pants';

describe(`with pants preset`, () => {
  it(`should create a pants product type draft`, () => {
    const pantsProductType = pants().build<TProductTypeDraft>();
    expect(pantsProductType).toEqual(
      expect.objectContaining({
        key: 'pants',
        name: 'Pants',
        description: 'Pants',
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
            isRequired: true,
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
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
          }),
          expect.objectContaining({
            name: 'fit',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Fit',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Fit',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Slim',
                  label: 'Slim',
                }),
                expect.objectContaining({
                  key: 'Straight',
                  label: 'Straight',
                }),
                expect.objectContaining({
                  key: 'Flair',
                  label: 'Flair',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
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
                  key: 'Blue',
                  label: 'Blue',
                }),
                expect.objectContaining({
                  key: 'Black',
                  label: 'Black',
                }),
                expect.objectContaining({
                  key: 'White',
                  label: 'White',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
          }),
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
                  key: 'Ankle',
                  label: 'Ankle',
                }),
                expect.objectContaining({
                  key: 'Crop',
                  label: 'Crop',
                }),
                expect.objectContaining({
                  key: 'Extra Long',
                  label: 'Extra Long',
                }),
              ]),
            }),
            attributeConstraint: 'None',
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
            isRequired: true,
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
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
          }),
          expect.objectContaining({
            name: 'fit',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Fit',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Fit',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Slim',
                  label: 'Slim',
                }),
                expect.objectContaining({
                  key: 'Straight',
                  label: 'Straight',
                }),
                expect.objectContaining({
                  key: 'Flair',
                  label: 'Flair',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
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
                  key: 'Blue',
                  label: 'Blue',
                }),
                expect.objectContaining({
                  key: 'Black',
                  label: 'Black',
                }),
                expect.objectContaining({
                  key: 'White',
                  label: 'White',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
          }),
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
                  key: 'Ankle',
                  label: 'Ankle',
                }),
                expect.objectContaining({
                  key: 'Crop',
                  label: 'Crop',
                }),
                expect.objectContaining({
                  key: 'Extra Long',
                  label: 'Extra Long',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
        ]),
      })
    );
  });

  it(`should create a pants product type draft when built for graphql`, () => {
    const pantsProductTypeGraphql =
      pants().buildGraphql<TProductTypeDraftGraphql>();
    expect(pantsProductTypeGraphql).toEqual(
      expect.objectContaining({
        key: 'pants',
        name: 'Pants',
        description: 'Pants',
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
            isRequired: true,
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
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
          expect.objectContaining({
            name: 'fit',
            label: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Fit',
                __typename: 'LocalizedString',
              }),
            ]),
            inputTip: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Fit',
                __typename: 'LocalizedString',
              }),
            ]),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              __typename: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Slim',
                  label: 'Slim',
                }),
                expect.objectContaining({
                  key: 'Straight',
                  label: 'Straight',
                }),
                expect.objectContaining({
                  key: 'Flair',
                  label: 'Flair',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
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
                  key: 'Blue',
                  label: 'Blue',
                }),
                expect.objectContaining({
                  key: 'Black',
                  label: 'Black',
                }),
                expect.objectContaining({
                  key: 'White',
                  label: 'White',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
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
                  key: 'Ankle',
                  label: 'Ankle',
                }),
                expect.objectContaining({
                  key: 'Crop',
                  label: 'Crop',
                }),
                expect.objectContaining({
                  key: 'Extra Long',
                  label: 'Extra Long',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
        ],
      })
    );
  });
});
