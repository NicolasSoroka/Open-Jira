# Next.js OpenJira App

To run locally, db is needed.

```
docker-compose up -d
```

* MongoDB local URL:
```
mongodb://localhost:27017/entriesdb
```


## Must configure env variables

Rename file __.env.template__ to __.env__

* Rebuild node modules and run next
```
yarn install
yarn dev
```


## Fill db with test data
Call to:
```
http://localhost:3000/api/seed
```
