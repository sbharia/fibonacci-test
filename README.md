This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Important Information

This project uses prisma sqlite as database to store and fetch fibonacci numbers. As this is only a test project, not being used in production, to make calculations and retreival faster, the data type used in the db table is 'int'.
As a result of this, it can only work upto the maximum 32 bit positive integer, which turns out to be 47th in fibonacci sequence.

## Prisma db information

To test out multiple scenarios, the db can be reset using the following command:

```bash
npx prisma migrate reset
```
and run project again using command shown above.
