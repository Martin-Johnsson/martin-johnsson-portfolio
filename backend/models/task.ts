import { model, Schema } from 'mongoose';

const TaskSchema = new Schema({
  taskName: { type: String, required: true },
  description: { type: String, required: true },
});

const TaskModel = model('Task', TaskSchema);

export default TaskModel;
