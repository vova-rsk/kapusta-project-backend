# kapusta-project-backend

## API:

#### POST https://finance-kapusta.herokuapp.com/user/signup

<pre>
request body:
{
    email - string,
    password - string
}
</pre>

#### POST https://finance-kapusta.herokuapp.com/user/login

<pre>
request body:
{
    email - string,
    password - string
}
</pre>

#### POST https://finance-kapusta.herokuapp.com/user/google-auth

<pre>
request body:
{
    token - google tokenId
}
</pre>

#### <span slyle="color:red"> next API needs bearer user-token and authorizationtype in request headers </span>

<pre>authorizationtype - one of ['byEmail', 'byGoogle']</pre>

#### POST https://finance-kapusta.herokuapp.com/user/logout

#### GET https://finance-kapusta.herokuapp.com/user/current

#### GET https://finance-kapusta.herokuapp.com/api/categories

#### GET https://finance-kapusta.herokuapp.com/api/transactions

<pre>
query string:
{
    type - one of ['debit', 'credit', 'all'],
    period - date in ISO8601 format
}
</pre>

#### POST https://finance-kapusta.herokuapp.com/api/transactions

<pre>
request body:
{
    type - one of ['debit', 'credit', 'all'],
    date - date in ISO8601 format,
    description - string,
    category - categoryId,
    amount - number
}
</pre>

#### DELETE https://finance-kapusta.herokuapp.com/api/transactions/:id

#### GET https://finance-kapusta.herokuapp.com/api/balance

#### POST https://finance-kapusta.herokuapp.com/api/balance

<pre>
request body:
{
    value - number
}
</pre>

#### GET https://finance-kapusta.herokuapp.com/api/reports/detailed

<pre>
query string:
{
    month - number from 0 to 11, 
    year - number in YYYY format
}
</pre>

#### GET https://finance-kapusta.herokuapp.com/api/reports/summary

<pre>
query string:
{ 
    type - one of ['debit', credit], 
    period - date in ISO8601 format 
}
</pre>
