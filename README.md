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

# App should become accessible at http://localhost:5173/
```

## Routes

| status | route            | detail                                                                                       |
| ------ | ---------------- | -------------------------------------------------------------------------------------------- |
| ✅     | `/`              | Default and featured characters are presented. User may search for characters via the header |
| ✅     | `/character/:id` | View a specific character's details.                                                         |
| 🚧     | `/profile`       | Began stubbing out inputs but ran outta steam.                                               |

- ✅ = completed other than styling adjustments.
- 🚧 = under construction/incomplete.

## Decisions

- [SvelteKit](https://kit.svelte.dev/) for framework. Many concepts are still fresh in my head from recent projects. Would have otherwise chosen NextJS.
- [`@tanstack/svelte-query`](https://tanstack.com/query/v4/docs/framework/svelte/overview), a svelte flavor of the asynchronous state manament library FKA [react-query](https://tanstack.com/query/latest). Provided lots of nice features that make fetching data nicer. I have previous experience with `react-query`, however the svelte flavor required more fiddling than I am fond of. One of the reasons I wish I chose NextJS since the react hooks are far more straight forward to begin using.
- [`zod`](https://zod.dev/) for schema definitions and data validation. This helped with some type coersion issues that I ran into while dealing with `@tanstack/svelte-query`.
- Stuck with Vanilla CSS and using SvelteKit's scoped styles to keep styling simple. Will probably use TailwindCSS in the future since it makes much of the flexbox styling easier/more intuitive.

## Known issues

- Featured Character "View Profile" links update the browsers address bar but do not load character profile page. The link _does_ however work on cards on the main page (i.e. default characters and search results). They should behave identically since they are created by the same component. I am currently stumped but would welcome a discussion on what may be happening here since I have yet to encounter an issue like this with SvelteKit.
- Styles are not mobile-friendly. This is especially problematic with the "featured characters" section in the footer as it takes up much of the page. I did my best to adhere to the sizes presented in Figma but everything still feels quite tight.
- The user profile page is not complete.
- A11y was not a top priority and no testing was done to verify it's usability with screen readers.
- Minimal error checking.
