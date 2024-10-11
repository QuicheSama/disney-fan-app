# Unoffical Disney Fan App

For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption.

## Running locally

```bash
# clone the repo
git clone https://github.com/QuicheSama/disney-fan-app.git


# navigate to the folder and install dependencies
cd disney-fan-app
npm install

# start the app in development mode.
npm run dev
```

## Routes

| status | route            | detail                                                                                       |
| ------ | ---------------- | -------------------------------------------------------------------------------------------- |
| ✅     | `/`              | Default and featured characters are presented. User may search for characters via the header |
| ✅     | `/character/:id` | View a specific character's details.                                                         |
| 🚧     | `/profile`       | Began stubbing out inputs but ran outta steam.                                               |

- ✅ = completed other than styling adjustments.
- 🚧 = under construction/incomplete.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
