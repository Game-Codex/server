# Game Codex

A visually appealing card game viewer

## Base URL

```http
http://localhost:PORT
```

## User Routes

------------------------------------

### Login

Login yourself in order to obtain the `access token`

### Endpoint

```http
POST /login
```

#### Body
- email: String
- password: String

#### Response

##### Status 200: Created

```json
{
    "access_token": "eyJhbGcixiJIU...",
    "email": "myEmail@mail.com"
}
```

------------------------------------

### Google Login

Login more easily through your Google account

### Endpoint

```http
POST /loginGoogle
```

#### Body
- email: String
- password: String

#### Response

##### Status 200: OK

```json
{
    "access_token": "eyJhbGcixiJIU...",
    "email": "myEmail@mail.com"
}
```

------------------------------------

### Register

Get yourself registered and privilege to access endpoints

### Endpoint

```http
POST /register
```
#### Body
- username: String
- email: String
- password: String

#### Response

##### Status 201: Successfully created

```json
{
    "access_token": "eyJhbGcixiJIU...",
    "email": "myEmail@mail.com"
}
```
------------------------------------

### Show Pokemon Cards

Enjoy lists of Pokemon Card

### Endpoint

```http
GET /cards
```

#### Header

access_token: String ***Required***

#### Response

-- Under construction --

##### Status 200: OK

```json
{
    "pokemoncards": "eyJhbGcixiJIU...",
    "page": "myEmail@mail.com"
}
```

------------------------------------

### Show Pokemon Cards by Types

Personalize your experience by selecting the cards by your favorite types

### Endpoint

```http
GET pokemon/cards?types=<name of type>
```

#### Header

access_token: String ***Required***

#### Query

types: "water"

#### Response

-- Under construction --

##### Status 200: OK

```json
{
    "pokemoncards": "eyJhbGcixiJIU...",
    "page": "myEmail@mail.com"
}
```
------------------------------------

### Show All Heroes

Present all heroes

### Endpoint

```http
GET dota/
```

#### Header

access_token: String ***Required***

#### Response

##### Status 200: OK

```json
{
    "heroes": [
        {
            "_id": "5dda708cd78c2e293e31f3b1",
            "name": "Anti-Mage",
            "large": "http://cdn.dota2.com/apps/dota2/images/heroes/antimage_lg.png",
            "small": "http://cdn.dota2.com/apps/dota2/images/heroes/antimage_sb.png",
            "full": "http://cdn.dota2.com/apps/dota2/images/heroes/antimage_full.png",
            "vertical": "http://cdn.dota2.com/apps/dota2/images/heroes/antimage_vert.jpg",
            "id": 1,
            "__v": 0
        },
        ...
        ...
    ]
}
```
------------------------------------

### Show Heroes By Roles

Show heroes by roles

### Endpoint

```http
GET dota/roles/:roles
```

#### Parameter

roles: <name of role>

#### Header

access_token: String ***Required***

#### Response

##### Status 200:

```json
{}
```
------------------------------------

### Show Hero Details

Provides details of your hero

### Endpoint

```http
GET dota/:id
```

#### Parameter

id: <id of hero>

#### Header

access_token: String ***Required***

#### Response

##### Status 200:

```json
{}
```