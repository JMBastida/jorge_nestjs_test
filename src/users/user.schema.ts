import * as mongoose from 'mongoose';
const TimeRecordsSchema = new mongoose.Schema({ online: Date, offline: Date });
const TimeSchema = new mongoose.Schema({
  date: Date,
  times: [TimeRecordsSchema],
});

export const UserSchema = new mongoose.Schema({
  timeRecords: [TimeSchema],
});
