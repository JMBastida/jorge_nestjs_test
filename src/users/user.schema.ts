import * as mongoose from 'mongoose';
const TimeRecordsSchema = new mongoose.Schema({
  online: Number,
  offline: Number,
});

export const UserSchema = new mongoose.Schema({
  clientId: String,
  timeRecords: [TimeRecordsSchema],
});
