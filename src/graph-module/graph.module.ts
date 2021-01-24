import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { config } from 'src/config';
import { DateScalar } from './scalars/data.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot({
      //autoSchemaFile: 'schema.gql',
      typePaths: ['schema.gql'],
      debug: config.NODE_ENV === 'development',
      playground: config.NODE_ENV === 'development',
      //typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 5,
      },
    }),
  ],
  providers: [DateScalar],
})
export class GraphModule {}
