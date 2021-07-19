# Community-Table
This is an application that integrates information between grocery stores and community organizations for at-risk food discovery.

## Project Requirements
<a href="https://www.figma.com/file/kYEHNajx152CqwGqjgOip3/Community-Table?node-id=0%3A1">Figma</a>
<a href="https://whimsical.com/community-table-FoZPsH8zCzsDTT1oWdAS1V">Whimsical Diagram</a>
<a href="https://docs.google.com/document/d/1OzatiZ3santSrK4_rQHGPNGZ-xBpKb39n5eck1PhdOM/edit?usp=sharing">Team Expectations</a>
<a href="https://docs.google.com/document/d/1_X-6IAQKls_ZJ4oxxiJzS5EmqE0wVMx_C_3YDJvBLYQ/edit?usp=sharing">Overview</a>
<p>Schema: </p>
```
```

import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Product = new Schema(
  {
    name: { type: String, required: true },
    category:{type: String, required: true}
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: String, required: true }
  },
  { timestamps: true }
)
export default mongoose.model('products', Product)

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    companyname: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
export default mongoose.model('users', User)



