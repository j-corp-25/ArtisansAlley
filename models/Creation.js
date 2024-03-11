import { Schema, model, models } from 'mongoose'

const CreationSchema = new Schema(
  {
    artisan: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    price: {
      currency: { type: String, required: true },
      amount: { type: Number, required: true },
    },
    artisan_info: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      location: { type: String, required: true },
    },
    images: [
      {
        type: String,
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    details: {
      material: { type: String, required: true },
      color: { type: String, required: true },
      dimensions: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
)

const Creation = models.Creation || model('Creation', CreationSchema)

export default Creation
