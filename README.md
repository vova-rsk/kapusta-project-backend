# kapusta-project-backend

# API:

#### POST https://finance-kapusta.herokuapp.com/user/signup

request body:

<!--
email: <string>,
password: <string>
-->

#### POST https://finance-kapusta.herokuapp.com/user/login

request body:

<!--
email: <string>,
password: <string>
-->

#### POST https://finance-kapusta.herokuapp.com/user/google-auth

request body:

<!--
token: <google tokenId>
-->

### !! next API needs bearer user-token and authorizationtype:<one of ['byEmail', 'byGoogle']> in headers

#### POST https://finance-kapusta.herokuapp.com/user/logout

#### GET https://finance-kapusta.herokuapp.com/user/current

#### GET https://finance-kapusta.herokuapp.com/api/categories

#### GET https://finance-kapusta.herokuapp.com/api/transactions

query string:

<!--
type: <one of ['debit', 'credit', 'all']>,
period: <ISO8601 format>
 -->

#### POST https://finance-kapusta.herokuapp.com/api/transactions

request body:

<!--
type: <one of ['debit', 'credit', 'all']>,
date: <in ISO8601 format>,
description: <string>,
category: <categoryId>,
amount: <number>
-->

#### DELETE https://finance-kapusta.herokuapp.com/api/transactions/:id

#### GET https://finance-kapusta.herokuapp.com/api/balance

#### POST https://finance-kapusta.herokuapp.com/api/balance

request body:

<!--
value: <number>,
-->

#### GET https://finance-kapusta.herokuapp.com/api/reports/detailed

query string:

month: <number from 0 to 11>, year: <YYYY format>

#### GET https://finance-kapusta.herokuapp.com/api/reports/summary

<!--
type: <one of ['debit', credit]>,
period: <ISO8601 format>,
 -->
