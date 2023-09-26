import type { TProductVariantDraft } from '../../../types';
import modernUpholsteredQueenBedVariant01 from './modern-upholstered-queen-bed-variant-01';
describe(`with modernUpholsteredQueenBedVariant01 preset`, () => {
  it('should return a sample modernUpholsteredQueenBedVariant01 product preset', () => {
    const modernUpholsteredQueenBedVariant01Preset =
      modernUpholsteredQueenBedVariant01().build<TProductVariantDraft>();
    expect(modernUpholsteredQueenBedVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "white",
              "en-GB": "white",
              "en-US": "white",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "White",
              "en-GB": "White",
              "en-US": "White",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "black",
              "en-GB": "black",
              "en-US": "black",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Ebony",
              "en-GB": "Ebony",
              "en-US": "Ebony",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
              "en-GB": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
              "en-US": "- Cotton Upholstery 
      - Standard Queen size
      - Assembly on site",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Queensize-Bett, das mit Samtstoff und Messingnägeln und Tufting bezogen ist, ist ein luxuriöses und elegantes Möbelstück, das jedem Schlafzimmer einen Hauch von Glamour und Raffinesse verleihen kann. Das Bett verfügt über einen Holzrahmen, der mit einer weichen und weichen Samtpolsterung bezogen ist.  Das Kopfteil des Bettes ist der Mittelpunkt des Designs und weist ein getuftetes oder gestepptes Muster auf, das eine weiche und einladende Oberfläche zum Anlehnen schafft. Das Tufting wird durch eine Nagelkopfverzierung aus Messing akzentuiert, die dem Design einen Hauch von metallischem Glanz und Textur verleiht.  Das Fußteil und die Seitengitter des Bettes sind ebenfalls mit dem gleichen Samtstoff bezogen und mit Messing-Nagelköpfen besetzt, wodurch ein zusammenhängender und stilvoller Look entsteht. Die Beine des Bettes sind aus Holz.  Das Queensize-Bett bietet viel Platz für eine angenehme Nachtruhe, während die luxuriösen Samtpolster und Messingakzente dem Raum ein Element von Glamour und Raffinesse verleihen. Das Bett kann mit einer Reihe von Bettwaren und Accessoires wie Plüschkissen und weichen Decken kombiniert werden, um eine gemütliche und einladende Atmosphäre zu schaffen.  Insgesamt ist ein Queensize-Bett, das mit Samtstoff und Messingnägeln und Tufting bezogen ist, ein atemberaubendes und stilvolles Möbelstück, das jedes Schlafzimmer in einen luxuriösen und eleganten Raum verwandeln kann. Seine Plüschpolsterung, das komplizierte Tufting und die metallischen Akzente machen es zu einem herausragenden Stück, das Sie beeindrucken und begeistern wird.",
              "en-GB": "A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.",
              "en-US": "A queen bed upholstered with velvet fabric and brass nails and tufting is a luxurious and elegant piece of furniture that can add a touch of glamour and sophistication to any bedroom. The bed features a wooden frame that is covered with soft and plush velvet upholstery.  The headboard of the bed is the focal point of the design, featuring a tufted or quilted pattern that creates a plush and inviting surface to lean against. The tufting is accentuated with brass nailhead trim, which adds a touch of metallic shine and texture to the design.  The footboard and side rails of the bed are also upholstered in the same velvet fabric and trimmed with brass nailheads, creating a cohesive and stylish look. The legs of the bed are wood.  The queen size of the bed provides ample space for a comfortable night's sleep, while the luxurious velvet upholstery and brass accents add an element of glamour and sophistication to the room. The bed can be paired with a range of bedding and accessories, such as plush pillows and soft blankets, to create a cozy and inviting atmosphere.  Overall, a queen bed upholstered with velvet fabric and brass nails and tufting is a stunning and stylish piece of furniture that can transform any bedroom into a luxurious and elegant space. Its plush upholstery, intricate tufting, and metallic accents make it a standout piece that is sure to impress and delight.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFF",
              "label": {
                "de-DE": "Weiss",
                "en-GB": "White",
                "en-US": "White",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 6000,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_332198625-HWsyg51y.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 259900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MUQB-01",
      }
    `);
  });
});
