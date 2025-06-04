import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
import {
  AttributeBooleanTypeDraft,
  AttributeBooleanTypeDraftGraphql,
  AttributeBooleanTypeDraftRest,
} from '../../../../attribute-boolean-type/attribute-boolean-type-draft';
import {
  AttributeDefinitionDraft,
  AttributeDefinitionDraftGraphql,
  AttributeDefinitionDraftRest,
} from '../../../../attribute-definition/attribute-definition-draft';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import {
  AttributeEnumTypeDraft,
  AttributeEnumTypeDraftGraphql,
  AttributeEnumTypeDraftRest,
} from '../../../../attribute-enum-type/attribute-enum-type-draft';
import {
  AttributeLocalizedEnumTypeDraft,
  AttributeLocalizedEnumTypeDraftGraphql,
  AttributeLocalizedEnumTypeDraftRest,
} from '../../../../attribute-localized-enum-type/attribute-localized-enum-type-draft';
import {
  AttributeLocalizedEnumValueDraft,
  AttributeLocalizedEnumValueDraftGraphql,
  AttributeLocalizedEnumValueDraftRest,
} from '../../../../attribute-localized-enum-value/attribute-localized-enum-value-draft';
import {
  AttributeNumberTypeDraft,
  AttributeNumberTypeDraftGraphql,
  AttributeNumberTypeDraftRest,
} from '../../../../attribute-number-type/attribute-number-type-draft';
import {
  AttributePlainEnumValueDraft,
  AttributePlainEnumValueDraftGraphql,
  AttributePlainEnumValueDraftRest,
} from '../../../../attribute-plain-enum-value/attribute-plain-enum-value-draft';
import {
  AttributeReferenceTypeDraft,
  AttributeReferenceTypeDraftGraphql,
  AttributeReferenceTypeDraftRest,
} from '../../../../attribute-reference-type/attribute-reference-type-draft';
import {
  AttributeSetTypeDraft,
  AttributeSetTypeDraftGraphql,
  AttributeSetTypeDraftRest,
} from '../../../../attribute-set-type/attribute-set-type-draft';
import {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../../../types';
import {
  ProductTypeDraft,
  ProductTypeDraftGraphql,
  ProductTypeDraftRest,
} from '../../index';

export const restPreset = (): TBuilder<TProductTypeDraftRest> =>
  ProductTypeDraftRest.presets
    .empty()
    .key('heavy-lifting-and-specialized-equipment')
    .name('Heavy Lifting and Specialized Equipment')
    .description('Equipment designed for heavy lifting and specialized tasks')
    .attributes([
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('capacity')
        .type(AttributeNumberTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Kapazität')
            ['it-IT']('Capacità')
            ['nl-NL']('Capaciteit')
            ['fr-FR']('Capacité')
            ['en-AU']('Capacity')
            ['es-ES']('Capacidad')
            ['en-GB']('Capacity')
            ['en-NZ']('Capacity')
            ['pt-PT']('Capacidade')
            ['en-US']('Capacity')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('iso45001')
        .type(AttributeBooleanTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('ISO 45001 zertifiziert')
            ['it-IT']('Certificato ISO 45001')
            ['nl-NL']('ISO 45001 gecertificeerd')
            ['fr-FR']('Certifié ISO 45001')
            ['en-AU']('ISO 45001 certified')
            ['es-ES']('Certificado ISO 45001')
            ['en-GB']('ISO 45001 certified')
            ['en-NZ']('ISO 45001 certified')
            ['pt-PT']('Certificado ISO 45001')
            ['en-US']('ISO 45001 certified')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('relatedProducts')
        .type(
          AttributeSetTypeDraftRest.random().elementType(
            AttributeReferenceTypeDraftRest.random().referenceTypeId('product')
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Verwandte Produkte')
            ['it-IT']('Prodotti correlati')
            ['nl-NL']('Gerelateerde producten')
            ['fr-FR']('Produits associés')
            ['en-AU']('Related products')
            ['es-ES']('Productos relacionados')
            ['en-GB']('Related products')
            ['en-NZ']('Related products')
            ['pt-PT']('Produtos relacionados')
            ['en-US']('Related products')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('mobility')
        .type(
          AttributeEnumTypeDraftRest.random().values([
            AttributePlainEnumValueDraftRest.random()
              .key('tracked')
              .label('Tracked'),
            AttributePlainEnumValueDraftRest.random()
              .key('wheeled')
              .label('Wheeled'),
            AttributePlainEnumValueDraftRest.random()
              .key('fixed')
              .label('Fixed'),
            AttributePlainEnumValueDraftRest.random()
              .key('marine')
              .label('Marine'),
          ])
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Mobilität')
            ['it-IT']('Mobilità')
            ['nl-NL']('Mobiliteit')
            ['fr-FR']('Mobilité')
            ['en-AU']('Mobility')
            ['es-ES']('Movilidad')
            ['en-GB']('Mobility')
            ['en-NZ']('Mobility')
            ['pt-PT']('Mobilidade')
            ['en-US']('Mobility')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('color')
        .type(
          AttributeLocalizedEnumTypeDraftRest.random().values([
            AttributeLocalizedEnumValueDraftRest.random()
              .key('RED')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Rot')
                  ['it-IT']('Rosso')
                  ['nl-NL']('Rood')
                  ['fr-FR']('Rouge')
                  ['en-AU']('Red')
                  ['es-ES']('Rojo')
                  ['en-GB']('Red')
                  ['en-NZ']('Red')
                  ['pt-PT']('Vermelho')
                  ['en-US']('Red')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('BLUE')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Blau')
                  ['it-IT']('Blu')
                  ['nl-NL']('Blauw')
                  ['fr-FR']('Bleu')
                  ['en-AU']('Blue')
                  ['es-ES']('Azul')
                  ['en-GB']('Blue')
                  ['en-NZ']('Blue')
                  ['pt-PT']('Azul')
                  ['en-US']('Blue')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('GREEN')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Grün')
                  ['it-IT']('Verde')
                  ['nl-NL']('Groen')
                  ['fr-FR']('Vert')
                  ['en-AU']('Green')
                  ['es-ES']('Verde')
                  ['en-GB']('Green')
                  ['en-NZ']('Green')
                  ['pt-PT']('Verde')
                  ['en-US']('Green')
              ),
          ])
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Farbe')
            ['it-IT']('Colore')
            ['nl-NL']('Kleur')
            ['fr-FR']('Couleur')
            ['en-AU']('Color')
            ['es-ES']('Color')
            ['en-GB']('Color')
            ['en-NZ']('Color')
            ['pt-PT']('Cor')
            ['en-US']('Color')
        )
        .isRequired(true)
        .attributeConstraint(attributeConstraints.Unique)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
    ]);

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  ProductTypeDraftGraphql.presets
    .empty()
    .key('heavy-lifting-and-specialized-equipment')
    .name('Heavy Lifting and Specialized Equipment')
    .description('Equipment designed for heavy lifting and specialized tasks')
    .attributeDefinitions([
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('capacity')
        .type(AttributeNumberTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Kapazität')
            ['it-IT']('Capacità')
            ['nl-NL']('Capaciteit')
            ['fr-FR']('Capacité')
            ['en-AU']('Capacity')
            ['es-ES']('Capacidad')
            ['en-GB']('Capacity')
            ['en-NZ']('Capacity')
            ['pt-PT']('Capacidade')
            ['en-US']('Capacity')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('iso45001')
        .type(AttributeBooleanTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('ISO 45001 zertifiziert')
            ['it-IT']('Certificato ISO 45001')
            ['nl-NL']('ISO 45001 gecertificeerd')
            ['fr-FR']('Certifié ISO 45001')
            ['en-AU']('ISO 45001 certified')
            ['es-ES']('Certificado ISO 45001')
            ['en-GB']('ISO 45001 certified')
            ['en-NZ']('ISO 45001 certified')
            ['pt-PT']('Certificado ISO 45001')
            ['en-US']('ISO 45001 certified')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('relatedProducts')
        .type(
          AttributeSetTypeDraftGraphql.random().elementType(
            AttributeReferenceTypeDraftGraphql.random().referenceTypeId(
              'product'
            )
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Verwandte Produkte')
            ['it-IT']('Prodotti correlati')
            ['nl-NL']('Gerelateerde producten')
            ['fr-FR']('Produits associés')
            ['en-AU']('Related products')
            ['es-ES']('Productos relacionados')
            ['en-GB']('Related products')
            ['en-NZ']('Related products')
            ['pt-PT']('Produtos relacionados')
            ['en-US']('Related products')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('mobility')
        .type(
          AttributeEnumTypeDraftGraphql.random().values([
            AttributePlainEnumValueDraftGraphql.random()
              .key('tracked')
              .label('Tracked'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('wheeled')
              .label('Wheeled'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('fixed')
              .label('Fixed'),
            AttributePlainEnumValueDraftGraphql.random()
              .key('marine')
              .label('Marine'),
          ])
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Mobilität')
            ['it-IT']('Mobilità')
            ['nl-NL']('Mobiliteit')
            ['fr-FR']('Mobilité')
            ['en-AU']('Mobility')
            ['es-ES']('Movilidad')
            ['en-GB']('Mobility')
            ['en-NZ']('Mobility')
            ['pt-PT']('Mobilidade')
            ['en-US']('Mobility')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('color')
        .type(
          AttributeLocalizedEnumTypeDraftGraphql.random().values([
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('RED')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Rot')
                  ['it-IT']('Rosso')
                  ['nl-NL']('Rood')
                  ['fr-FR']('Rouge')
                  ['en-AU']('Red')
                  ['es-ES']('Rojo')
                  ['en-GB']('Red')
                  ['en-NZ']('Red')
                  ['pt-PT']('Vermelho')
                  ['en-US']('Red')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('BLUE')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Blau')
                  ['it-IT']('Blu')
                  ['nl-NL']('Blauw')
                  ['fr-FR']('Bleu')
                  ['en-AU']('Blue')
                  ['es-ES']('Azul')
                  ['en-GB']('Blue')
                  ['en-NZ']('Blue')
                  ['pt-PT']('Azul')
                  ['en-US']('Blue')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('GREEN')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Grün')
                  ['it-IT']('Verde')
                  ['nl-NL']('Groen')
                  ['fr-FR']('Vert')
                  ['en-AU']('Green')
                  ['es-ES']('Verde')
                  ['en-GB']('Green')
                  ['en-NZ']('Green')
                  ['pt-PT']('Verde')
                  ['en-US']('Green')
              ),
          ])
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Farbe')
            ['it-IT']('Colore')
            ['nl-NL']('Kleur')
            ['fr-FR']('Couleur')
            ['en-AU']('Color')
            ['es-ES']('Color')
            ['en-GB']('Color')
            ['en-NZ']('Color')
            ['pt-PT']('Cor')
            ['en-US']('Color')
        )
        .isRequired(true)
        .attributeConstraint(attributeConstraints.Unique)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
    ]);

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
  ProductTypeDraft.presets
    .empty()
    .key('heavy-lifting-and-specialized-equipment')
    .name('Heavy Lifting and Specialized Equipment')
    .description('Equipment designed for heavy lifting and specialized tasks')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('capacity')
        .type(AttributeNumberTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Kapazität')
            ['it-IT']('Capacità')
            ['nl-NL']('Capaciteit')
            ['fr-FR']('Capacité')
            ['en-AU']('Capacity')
            ['es-ES']('Capacidad')
            ['en-GB']('Capacity')
            ['en-NZ']('Capacity')
            ['pt-PT']('Capacidade')
            ['en-US']('Capacity')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraft.presets
        .empty()
        .name('iso45001')
        .type(AttributeBooleanTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('ISO 45001 zertifiziert')
            ['it-IT']('Certificato ISO 45001')
            ['nl-NL']('ISO 45001 gecertificeerd')
            ['fr-FR']('Certifié ISO 45001')
            ['en-AU']('ISO 45001 certified')
            ['es-ES']('Certificado ISO 45001')
            ['en-GB']('ISO 45001 certified')
            ['en-NZ']('ISO 45001 certified')
            ['pt-PT']('Certificado ISO 45001')
            ['en-US']('ISO 45001 certified')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraft.presets
        .empty()
        .name('relatedProducts')
        .type(
          AttributeSetTypeDraft.random().elementType(
            AttributeReferenceTypeDraft.random().referenceTypeId('product')
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Verwandte Produkte')
            ['it-IT']('Prodotti correlati')
            ['nl-NL']('Gerelateerde producten')
            ['fr-FR']('Produits associés')
            ['en-AU']('Related products')
            ['es-ES']('Productos relacionados')
            ['en-GB']('Related products')
            ['en-NZ']('Related products')
            ['pt-PT']('Produtos relacionados')
            ['en-US']('Related products')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraft.presets
        .empty()
        .name('mobility')
        .type(
          AttributeEnumTypeDraft.random().values([
            AttributePlainEnumValueDraft.random()
              .key('tracked')
              .label('Tracked'),
            AttributePlainEnumValueDraft.random()
              .key('wheeled')
              .label('Wheeled'),
            AttributePlainEnumValueDraft.random().key('fixed').label('Fixed'),
            AttributePlainEnumValueDraft.random().key('marine').label('Marine'),
          ])
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Mobilität')
            ['it-IT']('Mobilità')
            ['nl-NL']('Mobiliteit')
            ['fr-FR']('Mobilité')
            ['en-AU']('Mobility')
            ['es-ES']('Movilidad')
            ['en-GB']('Mobility')
            ['en-NZ']('Mobility')
            ['pt-PT']('Mobilidade')
            ['en-US']('Mobility')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .type(
          AttributeLocalizedEnumTypeDraft.random().values([
            AttributeLocalizedEnumValueDraft.random()
              .key('RED')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Rot')
                  ['it-IT']('Rosso')
                  ['nl-NL']('Rood')
                  ['fr-FR']('Rouge')
                  ['en-AU']('Red')
                  ['es-ES']('Rojo')
                  ['en-GB']('Red')
                  ['en-NZ']('Red')
                  ['pt-PT']('Vermelho')
                  ['en-US']('Red')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('BLUE')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Blau')
                  ['it-IT']('Blu')
                  ['nl-NL']('Blauw')
                  ['fr-FR']('Bleu')
                  ['en-AU']('Blue')
                  ['es-ES']('Azul')
                  ['en-GB']('Blue')
                  ['en-NZ']('Blue')
                  ['pt-PT']('Azul')
                  ['en-US']('Blue')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('GREEN')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['de-DE']('Grün')
                  ['it-IT']('Verde')
                  ['nl-NL']('Groen')
                  ['fr-FR']('Vert')
                  ['en-AU']('Green')
                  ['es-ES']('Verde')
                  ['en-GB']('Green')
                  ['en-NZ']('Green')
                  ['pt-PT']('Verde')
                  ['en-US']('Green')
              ),
          ])
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['de-DE']('Farbe')
            ['it-IT']('Colore')
            ['nl-NL']('Kleur')
            ['fr-FR']('Couleur')
            ['en-AU']('Color')
            ['es-ES']('Color')
            ['en-GB']('Color')
            ['en-NZ']('Color')
            ['pt-PT']('Cor')
            ['en-US']('Color')
        )
        .isRequired(true)
        .attributeConstraint(attributeConstraints.Unique)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
    ]);
