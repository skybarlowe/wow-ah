# Blizzard API Service
GraphQL interface for queries to Blizzard API with cacheControl setup.

## Usage
First, install packages:
```
npm install
```

Fill your .env file with the following content:
```
CLIENT_ID=<your_client_id>
CLIENT_SECRET=<your_client_secret>
REGION=<region>
```

Then, start server:
```
npm start
```

## Queries
When server is up, go to http://localhost:4000/graphql and test your queries.

### Realms list
Get connected realms list.
```
{
  realms {
    data {
      id
      realms {
        slug
        name {
          es_ES
        }
      }
    }
  }
}
```

### Auctions
Get auctions from given realm.
```
{
  auctions(connectedRealmId: 1379) {
    id
    item {
      id
      modifiers {
        type
      }
    }
    buyout
    quantity
  }
}
```

### Item
Get item
```
{
  item(itemId: 183706) {
    id
    name {
      es_ES
    }
    quality {
      type
    }
  }
}
```