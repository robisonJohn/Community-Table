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
    location: { type: String, required: true }
  },
  { timestamps: true }
)
export default mongoose.model('users', User)

```

## MVP/PostMVP

### MVP

- Navbar displays logo, name and links to browse products and to signup/signin.
- Home page with about section, carousel displaying wines and section for the option to join the community.
- Display all products page with the option to click on product to learn benefits and inventory.
- Product's Detail Page includes name of product, image, and benefits.
- Detail page will have the option to edit and delete post if the user is a part of the vendor community.
- Submission form is only accessible for users/vendors who are logged in.
  Edit option is only available for users/vendors who are logged in.
- SignUp form
- SignIn form
- Full CRUD Functionality: Get, Post, Put and Delete products
- Footer with team name and link to this repository.

### PostMVP

- Sort by on display all products page.
- Add consumer users
- Change password functionality

## Heroku URL:

https://community-table-mvp.herokuapp.com/api/items
