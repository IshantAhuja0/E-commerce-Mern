import mongoose, { Schema } from "mongoose"
const categorySchema = new Schema({
  title: {
    type: String,
    requird: true,
    lowercase: true,
    unique: true,
    trim: true,
    maxlength: 1000
  },
  description: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null, // For subcategories like "Men > Shoes"
  },
  images: {
    type: [{
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    }],
    // validate: {
    //   validator: function (val) {
    //     return val.length > 0
    //   },
    //   message: 'At least one image is required'
    // }
  }
}
  , { timestamps: true })

export const Category = mongoose.model("Category", categorySchema)