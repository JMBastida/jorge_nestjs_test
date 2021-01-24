import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  readonly id?: string;
  @Field(() => [TimeRecords])
  readonly timeRecords: TimeRecords[];
}
@ObjectType()
class TimeRecords {
  @Field()
  date: Date;
  @Field(() => [Times])
  timeRecords: Times[];
}
@ObjectType()
class Times {
  @Field()
  online: Date;
  @Field()
  offline: Date;
}
