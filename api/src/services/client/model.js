import mongoose, { Schema } from 'mongoose'

const clientSchema = new Schema({
  client_number: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

clientSchema.methods = {
  view (full) {
    const view = {
      id: this.id,
      client_number: this.client_number,
    }

    return full ? {
      ...view
    } : view
  }
}

export default mongoose.model('client', clientSchema)
