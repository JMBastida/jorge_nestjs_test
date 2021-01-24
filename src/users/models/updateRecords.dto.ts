import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateRecordDTO {
  @Field() clientId?: string;
  @Field() initTime?: Date;
  @Field() finishTime?: Date;
  /*@Field(() => Array)
  placesIds?: TimeRecords[];*/
}
