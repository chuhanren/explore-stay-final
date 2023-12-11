### Explore Application

Our web application provides users with a sophisticated platform for discovering and booking unique accommodations and experiences. With a sleek and intuitive design, our platform seamlessly connects travelers with a diverse range of lodging options and activities. Users can easily explore a curated selection of listings, each offering a distinctive and personalized experience. The platform also includes robust search and filtering capabilities, by date, location and category, ensuring users can find the perfect stay that suits their preferences. It also allow hosts to add new property and manage reservations.

**Some Features:**

- Tailwind CSS
- Full responsiveness
- Credential authentication
- Google authentication
- Image upload

### Prerequisites

**Node version 14.x**

### Install packages

```shell
npm i
```

### Setup .env file

Please see the .env file

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
