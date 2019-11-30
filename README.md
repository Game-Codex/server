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

#### Response example
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
GET /pokemon/cards
```

#### Header

access_token: String ***Required***

#### Response

##### Status 200: OK

#### Response example

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
GET /pokemon/cards?types=<name of type>
```

#### Header

access_token: String ***Required***

#### Query

types: "water"

#### Response

##### Status 200: OK

#### Response example
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
GET /dota
```

#### Header

access_token: String ***Required***

#### Response

##### Status 200: OK

#### Response example
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
GET /dota/roles/:roles
```

#### Parameter

roles: <name of role>

#### Header

access_token: String ***Required***

#### Response

##### Status 200: OK

#### Response example
```json
{
    "hero": [
        1,
        4,
        6,
        8,
        9,
        10,
        11,
        ...
    ]
}
```
------------------------------------

### Show Hero Details

Provides details of your hero

### Endpoint

```http
GET /dota/:id
```

#### Parameter

id: <id of hero>

#### Header

access_token: String ***Required***

#### Response

##### Status 200:

#### Response example
```json
{
    "hero": {
        "id": 1,
        "name": "npc_dota_hero_antimage",
        "localized_name": "Anti-Mage",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": [
            "Carry",
            "Escape",
            "Nuker"
        ],
        "img": "/apps/dota2/images/heroes/antimage_full.png?",
        "icon": "/apps/dota2/images/heroes/antimage_icon.png",
        "base_health": 200,
        "base_health_regen": 0.25,
        "base_mana": 75,
        "base_mana_regen": 0,
        "base_armor": -1,
        "base_mr": 25,
        "base_attack_min": 29,
        "base_attack_max": 33,
        "base_str": 23,
        "base_agi": 24,
        "base_int": 12,
        "str_gain": 1.3,
        "agi_gain": 3.2,
        "int_gain": 1.8,
        "attack_range": 150,
        "projectile_speed": 0,
        "attack_rate": 1.4,
        "move_speed": 310,
        "turn_rate": 0.5,
        "cm_enabled": true,
        "legs": 2,
        "pro_ban": 68,
        "hero_id": 1,
        "pro_win": 25,
        "pro_pick": 48,
        "1_pick": 7256,
        "1_win": 3562,
        "2_pick": 22110,
        "2_win": 11106,
        "3_pick": 35985,
        "3_win": 18267,
        "4_pick": 42259,
        "4_win": 21368,
        "5_pick": 30588,
        "5_win": 15392,
        "6_pick": 12838,
        "6_win": 6471,
        "7_pick": 3696,
        "7_win": 1872,
        "8_pick": 257,
        "8_win": 120,
        "null_pick": 1929549,
        "null_win": 0
    }
}
```

------------------------------------

### Show Yugioh Cards

Display multiple Yugioh cards

### Endpoint

```http
GET /yugioh
```

#### Header

access_token: String ***Required***

#### Response

##### Status 200:

```json
{
    --Under construction--
}
```
------------------------------------

### Show Random Yugioh Cards

Created for those surprise seekers

### Endpoint

#### Response example
```http
GET /yugioh/random
```

#### Header

access_token: String ***Required***

#### Response

##### Status 200:

#### Response example
```json
{
    --Under construction--
}
```