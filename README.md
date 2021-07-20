# Community-Table
This is an application that integrates information between grocery stores and community organizations for at-risk food discovery.

## Project Requirements
<ul>
  <li><a href="https://www.figma.com/file/kYEHNajx152CqwGqjgOip3/Community-Table?node-id=0%3A1">Figma</a></li>
  <li><a href="https://whimsical.com/community-table-FoZPsH8zCzsDTT1oWdAS1V">Whimsical Diagram</a></li>
  <li><a href="https://docs.google.com/document/d/1OzatiZ3santSrK4_rQHGPNGZ-xBpKb39n5eck1PhdOM/edit?usp=sharing">Team Expectations</a></li>
  <li><a href="https://docs.google.com/document/d/1_X-6IAQKls_ZJ4oxxiJzS5EmqE0wVMx_C_3YDJvBLYQ/edit?usp=sharing">Overview</a></li>
  <li><a href="https://github.com/robisonJohn/Community-Table/projects/1?add_cards_query=is%3Aopen">GitHub Projects Page</a></li>
</ul>

<p>Schema: </p>


```

import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Item = new Schema(
  {
    name: { type: String, required: true },
    category:{type: String, required: true}
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: String, required: true }
  },
  { timestamps: true }
)
export default mongoose.model('item', Item)

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
export default mongoose.model('users', User)



