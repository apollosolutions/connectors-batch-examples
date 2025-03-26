# POST body example

```sh
deno run --allow-net=0.0.0.0:4001 --watch api.ts
```

```sh
export APOLLO_KEY=<your api key>
export APOLLO_GRAPH_REF=<your graph ref>
export APOLLO_ROVER_DEV_ROUTER_VERSION=2.2.0-preview.0
rover dev --supergraph-config batch.yaml --router-config router.yaml
```

```graphql
query Query {
  users {
    id
    name
    username
  }
}
```

![Connectors debugger showing only two requests](./debugger.png)
