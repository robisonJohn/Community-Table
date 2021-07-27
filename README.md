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

- Sort and filter functions for Items page based on tax law and economic theory.

## Heroku URL:

https://community-table-mvp.herokuapp.com/api/items

## Product Philosophy

<p>The core idea behind Community Table is that we can leverage the notions of present and future expected value, supply and demand, economic optimization, and tax incentive structures in order to encourage grocery stores to donate excess inventory before the food goes to waste. This will have a two-pronged benefit: </p>
<ul>
  <li>Food waste and food insecurity will be simultaneously minimized</li>
  <li>Small businesses will be able to optimize at the margins while also doing the most good for their communities</li>
</ul>

<p>To do so, we will rely on the idea of Expected Value, which is the probability of a given outcome multiplied by the value of this outcome.</p> 

<p>A fundamental problem with grocery stores is that they see food pricing in a fundamentally binary nature--either it sells for the price set by the store, or it goes bad. Sales and other such discount events are too infrequent and imprecise to have a meaningful impact on supply and demand.</p>

<p>In particular, food value should not be a discrete value (its static price at sale) but rather a continuous value represented by its expected value. In this case, the expected value is equal to the probability the food will sell at any given point in time multiplied by its initial store price.</p>

<p>To estimate the probability a good will sell, we need to consider how close it is to expiration. In principle, the probability a good will be sold when it first arrives in the store is some value X. When the good expires, the probability it is purchased is equal to zero (assuming no one wants to purchase expired foods). Therefore, the probability that the food will be purchased at any time <em>t</em> is a function of how close an item is to expiration. We model this function below:</p>

<p>Let t be the number of days the item has been held. Let s denote the shelf life of the item. Then we can define the probability that an item is purchased at time t to be as follows: </p>

P(t) = (1 - (t / s))














