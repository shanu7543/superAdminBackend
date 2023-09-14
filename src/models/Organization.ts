import type { Document } from 'mongoose';
import { model, Schema } from 'mongoose';

interface IOrganization {
  name: string;
  logo?: {
    bucket: string;
    fileName: string;
    fileUrl: string;
    etag?: string;
  };
  ownedDomain?: string;
  branding?: string;
  language?: string;
  colors?: string;
  font?: string;
  owner?: Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IOrganizationDocument extends IOrganization, Document {}

const OrganizationSchema = new Schema<IOrganizationDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    ownedDomain: {
      type: String,
      required: false,
    },
    branding: {
      type: String,
      enum: ['VIDYCHAT', 'NONE'],
      default: 'VIDYCHAT',
      required: false,
    },
    language: {
      type: String,
      required: false,
    },

    colors: {
      type: String,
      required: false,
    },
    font: {
      type: String,
      required: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    createdAt: {
      type: Date,
      required: false,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  },
  { timestamps: true }
);

const Organization = model<IOrganizationDocument>(
  'organization',
  OrganizationSchema
);

export default Organization;
