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

<p>The core idea behind Community Table is that we can leverage economic theory to encourage grocery stores to donate excess inventory before the food goes to waste. This will have a two-pronged benefit: </p>
<ul>
  <li>Food waste and food insecurity will be simultaneously minimized</li>
  <li>Small businesses will be able to optimize at the margins while also doing the most good for their communities</li>
</ul>

<p>To do so, we will rely on a concept from Probability Theory known as expected value, which is the probability of a given outcome multiplied by the value of this outcome (i.e. the expected payout of a given action).</p> 

<p>A fundamental problem with grocery stores is that they see food pricing as a binary mechanism: the food item either sells for the price set by the store or else goes bad and is thrown out. Sales and other such discount events are too infrequent and imprecise to have a meaningful impact on supply and demand.</p>

<p>Contrary to conventional norms, food value should not be a discrete value (its static price at sale). Instead, the price of a given item of food should be a continuous value represented by its expected value. In this case, the expected value is equal to the probability the food will sell at any given point in time multiplied by its initial store price.</p>

<p>To estimate the probability a good will sell, we need to consider how close it is to expiration. In principle, the probability a good will be sold when it first arrives in the store is some value P(0). When the good expires, the probability it is purchased is equal to zero (assuming no one wants to purchase expired foods). Therefore, the probability that the food will be purchased at any time <em>t</em> is a function of how close an item is to expiration. We model this function below:</p>

<p>Let t be the number of days the item has been held. Let s denote the shelf life of the item. Then we can define the probability that an item X is purchased at time t with waste coefficient w to be as follows: </p>

```

P(t) = w * (1 - (t / s))

```

<p>Therefore, the expected value of some good X that has a market value price of r at time t is equal to the following: </p>

```

E[X] = r * P(t)

```

<p>Similarly, we know that New York City law dictates that any organization can make deductions on their annual taxes for charitable food donations. In particular, you can deduct 25% of the fair-market value of any good you donate off your tax returns. However, the FDA has strict rules regarding donations. Therefore, food cannot just be given away at the point of expiration. Therefore, food must be given away at the exact inflection point at which the food's expected value falls below 25% of the fair market value. Let us model the tax deductible value of a good X below as follows: </p>

```

D(X) = 0.25 * r

```

<p>When the expected value of the food is greater than its deductible value, it is more optimal to sell the food than to give it away. However, as the expected value drops below its fair-market value, it is more optimal to donate than it is to sell. This can be modeled as follows: </p>

<p>Let S(X) represent a stepwise function that represents whether or not a good should be sold as follows: </p>

```
S(X) = E[X] - D(X)
if S(X) >= 0:
  return 1
else:
  return 0
  
```

  
<p>We can model this in code as follows:</p>


```
const waste = 0.65

const goodItems = arr => arr.filter(element => 
    (element.price * waste * (1 - (element.daysHeld / element.shelfLife))) >= element.price * 0.25
)

const needToGo = arr => arr.filter(element => 
    element.price * 0.25 > (element.price * waste * (1 - (element.daysHeld / element.shelfLife)))
)

```



