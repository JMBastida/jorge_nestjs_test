import * as mongoose from 'mongoose';
const TimeRecordsSchema = new mongoose.Schema({ online: Date, offline: Date });

export const UserSchema = new mongoose.Schema({
  timeRecords: [TimeRecordsSchema],
});
