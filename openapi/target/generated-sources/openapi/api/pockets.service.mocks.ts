import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';

/**
* Mocks provider for /serviceName/pocket URL pattern
*/
export const PocketsHttpServicePocketPostMocksProvider: Provider = createMocks([{
        urlPattern: "/serviceName/pocket",
        method: "POST",
        responses: [
    ]
}]);
/**
* Mocks provider for /serviceName/pockets URL pattern
*/
export const PocketsHttpServicePocketsGetMocksProvider: Provider = createMocks([{
        urlPattern: "/serviceName/pockets",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: {
  "$ref" : "examples/body/pockets-list.json"
}
                },
    ]
}]);
/**
* Mocks provider for /serviceName/pockets/{id} URL pattern
*/
export const PocketsHttpServicePocketsIdGetMocksProvider: Provider = createMocks([{
        urlPattern: "/serviceName/pockets/{id}",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: {
  "$ref" : "examples/body/pockets-detail.json"
}
                },
                {
                    status: 200,
                    body: {
  "goal" : {
    "amount" : 0.8008281904610115,
    "currency" : "currency"
  },
  "goalDate" : "goalDate",
  "name" : "name",
  "funds" : {
    "amount" : 0.8008281904610115,
    "currency" : "currency"
  },
  "id" : "id",
  "transactions" : [ {
    "date" : "date",
    "incoming" : true,
    "amount" : {
      "amount" : 0.8008281904610115,
      "currency" : "currency"
    },
    "id" : "id",
    "account" : "account"
  }, {
    "date" : "date",
    "incoming" : true,
    "amount" : {
      "amount" : 0.8008281904610115,
      "currency" : "currency"
    },
    "id" : "id",
    "account" : "account"
  } ]
}
                },
    ]
}]);

export const PocketsHttpServiceMocksProvider: Provider = createMocks(
    [
    {
        urlPattern: "/serviceName/pocket",
        method: "POST",
        responses: [

    ]
},
    {
        urlPattern: "/serviceName/pockets",
        method: "GET",
        responses: [

            {
                status: 200,
                body: {
  "$ref" : "examples/body/pockets-list.json"
}
            },
    ]
},
    {
        urlPattern: "/serviceName/pockets/{id}",
        method: "GET",
        responses: [

            {
                status: 200,
                body: {
  "$ref" : "examples/body/pockets-detail.json"
}
            },
            {
                status: 200,
                body: {
  "goal" : {
    "amount" : 0.8008281904610115,
    "currency" : "currency"
  },
  "goalDate" : "goalDate",
  "name" : "name",
  "funds" : {
    "amount" : 0.8008281904610115,
    "currency" : "currency"
  },
  "id" : "id",
  "transactions" : [ {
    "date" : "date",
    "incoming" : true,
    "amount" : {
      "amount" : 0.8008281904610115,
      "currency" : "currency"
    },
    "id" : "id",
    "account" : "account"
  }, {
    "date" : "date",
    "incoming" : true,
    "amount" : {
      "amount" : 0.8008281904610115,
      "currency" : "currency"
    },
    "id" : "id",
    "account" : "account"
  } ]
}
            },
    ]
},
]
);


