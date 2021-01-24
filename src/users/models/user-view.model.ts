import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  readonly id?: string;
  @Field()
  readonly clientId: string;
  @Field(() => [TimeRecords])
  readonly timeRecords: TimeRecords[];
}
@ObjectType()
class TimeRecords {
  @Field()
  online: Date;
  @Field()
  offline: Date;
}
