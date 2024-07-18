/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../database/config'
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './users/users.resolver';
import {ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig> ({
      driver:ApolloDriver,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
      resolvers: { UserResolver },
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
  ],
})
export class AppModule {}
