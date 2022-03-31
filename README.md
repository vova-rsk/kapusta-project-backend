# kapusta-project-backend

# API:

# POST https://finance-kapusta.herokuapp.com/user/signup

request body:

<!--
email: <string>,
password: <string>
-->

# POST https://finance-kapusta.herokuapp.com/user/login

request body:

<!--
email: <string>,
password: <string>
-->

# POST https://finance-kapusta.herokuapp.com/user/google-auth

request body:

<!--
token: <google tokenId>
-->

### !! next API needs bearer user-token and authorizationtype:<one of ['byEmail', 'byGoogle']> in headers

# POST https://finance-kapusta.herokuapp.com/user/logout

# GET https://finance-kapusta.herokuapp.com/user/current

# GET https://finance-kapusta.herokuapp.com/api/categories

# GET https://finance-kapusta.herokuapp.com/api/transactions

# POST https://finance-kapusta.herokuapp.com/api/transactions

request body:

<!--
type: <one of ['debit', 'credit', 'all']>,
date: <in ISO8601 format>,
description: <string>,
category: <categoryId>,
amount: <number>
-->

# DELETE https://finance-kapusta.herokuapp.com/api/transactions/:id

# GET https://finance-kapusta.herokuapp.com/api/balance

# POST https://finance-kapusta.herokuapp.com/api/balance

request body:

<!--
value: <number>,
-->

# GET https://finance-kapusta.herokuapp.com/api/reports/detailed

# GET https://finance-kapusta.herokuapp.com/api/reports/summary
