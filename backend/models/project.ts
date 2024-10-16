import { model, Schema } from 'mongoose';

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  shortAbout: { type: String, required: true },
  placeholderMainImage: {
    imageUrl: { type: String, required: true },
    alt: { type: String, required: true },
  },
  mainImage: {
    imageUrl: { type: String, required: true },
    alt: { type: String, required: true },
  },
  modalPlaceholderImage: {
    imageUrl: { type: String, required: true },
    alt: { type: String, required: true },
  },
  modalImage: {
    imageUrl: { type: String, required: true },
    alt: { type: String, required: true },
  },
  tags: [
    {
      tag: { type: String, required: true },
    },
  ],
});

const projectModel = model('Project', projectSchema);

export default projectModel;
