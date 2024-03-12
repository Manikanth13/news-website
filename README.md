This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependancies

```bash
npm i
# or
yarn
```

## News Data api

- To obtain the latest news overview, I've utilized the [`NewsData API`](https://newsdata.io/).
- Please create a free account to obtain a public API key, which should be placed inside the `.env` file.
- After replacing the key, kindly reload the app to fetch the updated news data.

or copy the below environment variables:

```
NEXT_PUBLIC_API_URL= https://newsdata.io/api/1/news
NEXT_PUBLIC_API_KEY = pub_39907b0e4f8e8cfd46614fe002fd733eb2b39
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Responsive Design

- Adjust the tab size to view the responsive design of the page on both mobile and desktop views.

## Navigation

- Website contains navigation breadcrumb which we can view only on the second level. The second level is only shown if a user clicks on the first level - Read More
