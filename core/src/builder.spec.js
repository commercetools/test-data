import { sequence, fake } from '@jackfranklin/test-data-bot';
import {
  buildField,
  buildFields,
  buildGraphqlList,
  buildRestList,
} from './helpers';
import Builder from './builder';
import Generator from './generator';
import Transformer from './transformer';

describe('building', () => {
  describe('without generator', () => {
    describe('without defaults', () => {
      it('should build all properties', () => {
        const built = Builder()
          .id(1)
          .userName('Fred')
          .email('fred@foo.com')
          .build();

        expect(built).toEqual(
          expect.objectContaining({
            id: 1,
            userName: 'Fred',
            email: 'fred@foo.com',
          })
        );
      });
    });

    describe('with defaults', () => {
      it('should include defaults in all build properties', () => {
        const defaults = {
          street: 'Homestreet 14',
        };

        const built = Builder({ defaults })
          .id(1)
          .userName('Fred')
          .email('fred@foo.com')
          .build();

        expect(built).toEqual(
          expect.objectContaining({
            ...defaults,
            id: 1,
            userName: 'Fred',
            email: 'fred@foo.com',
          })
        );
      });
    });

    describe('with transformer', () => {
      describe('when adding fields', () => {
        describe('when field does not exist', () => {
          it('should add the desired fields', () => {
            const transformers = {
              graphql: Transformer('graphql', {
                addFields: ({ fields }) => ({
                  identifier: fields.id,
                }),
              }),
            };
            const built = Builder({
              transformers,
            })
              .id(1)
              .userName('Fred')
              .email('fred@foo.com')
              .buildGraphql();

            // Contains regularily built properties
            expect(built).toEqual(
              expect.objectContaining({
                userName: 'Fred',
                email: 'fred@foo.com',
              })
            );

            // Contains properties through transforms
            expect(built).toEqual(
              expect.objectContaining({
                identifier: built.id,
              })
            );
          });
        });

        describe('when field exists', () => {
          it('should not add the desired fields', () => {
            const transformers = {
              graphql: Transformer('graphql', {
                addFields: () => ({
                  id: 2,
                }),
              }),
            };
            const built = Builder({
              transformers,
            })
              .id(1)
              .userName('Fred')
              .email('fred@foo.com')
              .buildGraphql();

            // Contains regularily built properties
            expect(built).toEqual(
              expect.objectContaining({
                userName: 'Fred',
                email: 'fred@foo.com',
              })
            );

            // Contains properties through transforms
            expect(built).toEqual(
              expect.objectContaining({
                id: 1,
              })
            );
          });
        });
      });

      describe('when replacing fields', () => {
        describe('when field does not exist', () => {
          it('should not add the desired fields', () => {
            const transformers = {
              graphql: Transformer('graphql', {
                replaceFields: ({ fields }) => ({
                  identifier: fields.id,
                }),
              }),
            };
            const built = Builder({
              transformers,
            })
              .id(1)
              .userName('Fred')
              .email('fred@foo.com')
              .buildGraphql();

            // Contains regularily built properties
            expect(built).toEqual(
              expect.objectContaining({
                userName: 'Fred',
                email: 'fred@foo.com',
              })
            );

            // Does not contain properties through transforms
            expect(built).toEqual(
              expect.not.objectContaining({
                identifier: built.id,
              })
            );
          });
        });

        describe('when field exists', () => {
          it('should replace the desired fields', () => {
            const transformers = {
              graphql: Transformer('graphql', {
                replaceFields: ({ fields }) => ({
                  id: fields.id + 1,
                }),
              }),
            };
            const built = Builder({
              transformers,
            })
              .id(1)
              .userName('Fred')
              .email('fred@foo.com')
              .buildGraphql();

            // Contains regularily built properties
            expect(built).toEqual(
              expect.objectContaining({
                userName: 'Fred',
                email: 'fred@foo.com',
              })
            );

            // Contains properties through transforms
            expect(built).toEqual(
              expect.objectContaining({
                id: 2,
              })
            );
          });
        });
      });
    });

    describe('when removing fields', () => {
      it('should remove the desired fields', () => {
        const transformers = {
          graphql: Transformer('graphql', {
            removeFields: ['id'],
          }),
        };

        const built = Builder({
          transformers,
        })
          .id(1)
          .userName('Fred')
          .email('fred@foo.com')
          .buildGraphql();

        // Contains regularily built properties
        expect(built).toEqual(
          expect.objectContaining({
            userName: 'Fred',
            email: 'fred@foo.com',
          })
        );

        // Does not contain properties through transforms
        expect(built).toEqual(
          expect.not.objectContaining({
            id: built.id,
          })
        );
      });
    });
  });

  describe('with generator', () => {
    const generator = Generator({
      name: 'Organization',
      fields: {
        id: fake((f) => f.random.uuid()),
        version: sequence(),
        name: fake((f) => f.company.companyName()),
      },
    });

    it('should build all properties with custom properties', () => {
      const built = Builder({ generator }).id('my-id').build();

      expect(built).toEqual(
        expect.objectContaining({
          id: 'my-id',
          name: expect.any(String),
        })
      );
    });

    it('should build all build upon properties with callbacks', () => {
      const built = Builder({ generator })
        .id('my-id')
        .name(({ id }) => ({
          name: 'My name',
          version: `${id}-1`,
        }))
        .build();

      expect(built).toEqual(
        expect.objectContaining({
          id: 'my-id',
          name: 'My name',
          version: `${built.id}-1`,
        })
      );
    });

    it('should build all build upon properties with transforms', () => {
      const transformers = {
        graphql: Transformer('graphql', {
          addFields: ({ fields }) => {
            const identifier = 1;

            return {
              identifier,
              v: `${fields.version}-${identifier}`,
            };
          },
          removeFields: ['id', 'version'],
        }),
      };
      const built = Builder({
        generator,
        transformers,
        defaults: {
          version: 2,
        },
      })
        .name('My name')
        .buildGraphql();

      // Should keep non defaulted and non overwritten properties
      expect(built).toEqual(
        expect.objectContaining({
          name: 'My name',
        })
      );

      // Should allow overwriting while using defaults
      expect(built).toEqual(
        expect.objectContaining({
          identifier: 1,
          v: '2-1',
        })
      );

      // Should remove properties
      expect(built).toEqual(
        expect.not.objectContaining({
          id: expect.any(String),
          version: expect.any(Number),
        })
      );
    });

    describe('when fields should be omitted', () => {
      describe('with `omitFields`', () => {
        it('should build properties and omit as requested', () => {
          const built = Builder({ generator })
            .email('fred@foo.com')
            .build({ omitFields: ['id', 'version'] });

          expect(built).toEqual(
            expect.objectContaining({
              email: 'fred@foo.com',
            })
          );

          expect(built).toEqual(
            expect.not.objectContaining({
              id: expect.any(String),
              version: expect.any(Number),
            })
          );
        });
      });

      describe('with `keepFields`', () => {
        it('should build properties and omit as requested', () => {
          const built = Builder({ generator })
            .email('fred@foo.com')
            .build({ keepFields: ['id', 'version'] });

          expect(built).toEqual(
            expect.objectContaining({
              id: expect.any(String),
              version: expect.any(Number),
            })
          );

          expect(built).toEqual(
            expect.not.objectContaining({
              email: expect.any(String),
            })
          );
        });
      });
    });
  });

  describe('with nested builders', () => {
    describe('building in transformer', () => {
      describe('with default transform', () => {
        describe('with property', () => {
          it('should build nested builder on demand', () => {
            const transformers = {
              default: Transformer('default', {
                buildFields: ['user'],
              }),
            };
            const built = Builder({ transformers })
              .id('my-id')
              .user(Builder().name('My name'))
              .build();

            expect(built.user.name).toEqual('My name');
            expect(built).toMatchInlineSnapshot(`
              Object {
                "id": "my-id",
                "user": Object {
                  "name": "My name",
                },
              }
            `);
          });
        });
      });

      describe('with named transform', () => {
        describe('with property', () => {
          it('should build nested builder on demand', () => {
            const transformers = {
              graphql: Transformer('graphql', {
                buildFields: ['user'],
              }),
            };
            const built = Builder({ transformers })
              .id('my-id')
              .user(Builder().name('My name'))
              .buildGraphql();

            expect(built.user.name).toEqual('My name');
            expect(built).toMatchInlineSnapshot(`
              Object {
                "id": "my-id",
                "user": Object {
                  "name": "My name",
                },
              }
            `);
          });
        });

        describe('with list', () => {
          it('should build nested builders', () => {
            const teamTransformers = {
              graphql: Transformer('graphql', {
                buildFields: ['users'],
              }),
            };
            const userTransformers = {
              graphql: Transformer('graphql', {
                addFields: () => ({
                  id: 1,
                }),
              }),
            };
            const built = Builder({ transformers: teamTransformers })
              .id('my-id')
              .users([
                Builder({ transformers: userTransformers }).name('My name'),
                Builder({ transformers: userTransformers }).name(
                  'My other name'
                ),
              ])
              .buildGraphql();

            expect(built.users).toHaveLength(2);
            expect(built).toMatchInlineSnapshot(`
              Object {
                "id": "my-id",
                "users": Array [
                  Object {
                    "id": 1,
                    "name": "My name",
                  },
                  Object {
                    "id": 1,
                    "name": "My other name",
                  },
                ],
              }
            `);
          });
        });
      });
    });

    describe('building in transform', () => {
      describe('with property', () => {
        it('should build nested builders on demand', () => {
          const transformers = {
            graphql: Transformer('graphql', {
              replaceFields: ({ fields }) => ({
                user: buildField(fields.user),
              }),
            }),
          };
          const built = Builder({ transformers })
            .id('my-id')
            .user(Builder().name('My name'))
            .buildGraphql();

          expect(built.user.name).toEqual('My name');
          expect(built).toMatchInlineSnapshot(`
            Object {
              "id": "my-id",
              "user": Object {
                "name": "My name",
              },
            }
          `);
        });
      });

      describe('with list', () => {
        it('should build nested builders on demand', () => {
          const teamTransformers = {
            graphql: Transformer('graphql', {
              replaceFields: ({ fields }) => ({
                users: buildFields(fields.users, 'graphql'),
              }),
            }),
          };
          const userTransformers = {
            graphql: Transformer('graphql', {
              addFields: () => ({
                id: 1,
              }),
            }),
          };
          const built = Builder({ transformers: teamTransformers })
            .id('my-id')
            .users([
              Builder({ transformers: userTransformers }).name('My name'),
              Builder({ transformers: userTransformers }).name('My other name'),
            ])
            .buildGraphql();

          expect(built.users).toHaveLength(2);
          expect(built).toMatchInlineSnapshot(`
            Object {
              "id": "my-id",
              "users": Array [
                Object {
                  "id": 1,
                  "name": "My name",
                },
                Object {
                  "id": 1,
                  "name": "My other name",
                },
              ],
            }
          `);
        });
      });
    });
  });

  describe('paginated list', () => {
    const generator = Generator({
      name: 'Organization',
      fields: {
        id: fake((f) => f.random.uuid()),
        version: sequence(),
        name: fake((f) => f.company.companyName()),
      },
    });
    const builder = Builder({ generator }).id('my-id');

    describe('with graphql transform', () => {
      it('should build a paginated graphql list', () => {
        const list = buildGraphqlList([builder, builder], {
          name: 'Organization',
          total: 10,
          offset: 2,
        });

        expect(list.results).toHaveLength(2);
        expect(list.__typename).toBe('OrganizationQueryResult');
        expect(list).toEqual(
          expect.objectContaining({
            results: expect.arrayContaining([
              expect.objectContaining({
                id: 'my-id',
              }),
            ]),
          })
        );
      });
    });

    describe('with rest transform', () => {
      it('should build a paginated rest list', () => {
        const list = buildRestList([builder, builder], {
          total: 10,
          offset: 2,
        });

        expect(list.results).toHaveLength(2);
        expect(list.__typename).not.toBeDefined();
        expect(list).toEqual(
          expect.objectContaining({
            results: expect.arrayContaining([
              expect.objectContaining({
                id: 'my-id',
              }),
            ]),
          })
        );
      });
    });
  });
});
