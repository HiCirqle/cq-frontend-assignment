# Assignment

At The Cirqle, we help our clients to reach their marketing objectives. One way we do this, is by helping them connect with new (potential) customers through paid media (sponsored) posts. To be successful when running paid media campaigns, precise and strategic targeting is of the utmost importance.

Through our platform we allow our users to select what interest categories they'd like to target with their campaigns.

## Goal

Build a modal that serves a tree select component to the user, allowing them to select interests they'd like to target in their next paid media campaign.

![tree select](https://github.com/HiCirqle/cq-fullstack-assignment/blob/master/mockups/1_emtpy_state.jpg)

## Back end

We scaffolded a basic Express backend for you in the `api` directory that you can call in your front end.

```
GET /interests
[
  {"id":"6007828099136", "name":"Luxury goods", "path": "[...]" },
  {"id":"6009422452499", "name":"Home and garden", "path": "[...]" }
  ...
]
```

Consuming the `/interests` endpoint returns an array of Facebook Targeting Interests.
You can find documentation on this data from Facebook here:
https://developers.facebook.com/docs/marketing-api/audiences/reference/targeting-search/

#### Run backend locally

Setup and run boilerplate locally

```
yarn install
yarn run start
```

## Front end

Build a tree select component that allows the user to select interests.
Available interests are imported by consuming the endpoint created earlier.

The hierarchy for the interests can be found in the path property.
Users are able to select an unlimited amount of interests.

#### 1. Front end framework or tools

You're free to decide what tooling you'd like to use to call the API or to build up the tree select widget.
At The Cirqle we use Vue SFC (ES6, Pug for templating, (S)CSS for styling).

#### 2. Interaction with tree select widget

![Clicking the label and/or chevron toggles the visibility of the node's direct children (if any).](https://github.com/HiCirqle/cq-fullstack-assignment/blob/master/mockups/2_open_leaves.jpg)

Clicking the label and/or chevron toggles the visibility of the node's direct children (if any).

![Children can contain multiple levels of grandchildren.](https://github.com/HiCirqle/cq-fullstack-assignment/blob/master/mockups/3_recursively_open_leaves.jpg)

Children can contain multiple levels of grandchildren.

Selecting a grandchild only adds the clicked element to the selection. Parents of the selected (grand)child now have the intermediary state.

![Selecting a grandchild only adds the clicked element to the selection.](https://github.com/HiCirqle/cq-fullstack-assignment/blob/master/mockups/4_select%20node_leaf.jpg)
![Selecting a grandchild only adds the clicked element to the selection.](https://github.com/HiCirqle/cq-fullstack-assignment/blob/master/mockups/5_select_intermediary_leaf.jpg)

When a parent is selected, all underlying children and grandchildren are selected too.

![Selecting a grandchild only adds the clicked element to the selection.](https://github.com/HiCirqle/cq-fullstack-assignment/blob/master/mockups/6_select%20parent_leaf.jpg)
