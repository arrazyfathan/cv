![cv](https://github.com/BartoszJarocki/cv/assets/1017620/79bdb9fc-0b20-4d2c-aafe-0526ad4a71d2)

# Minimalist CV [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBartoszJarocki%2Fcv)

Simple web app that renders a minimalist, print-friendly CV.

Built with Next.js 16, React, TypeScript, shadcn/ui, and Tailwind CSS. Deploy anywhere (Vercel ready).

# Features

- Single config file to edit your data: [src/data/resume-data.tsx](./src/data/resume-data.tsx)
- Next.js 16, React, TypeScript, shadcn/ui, Tailwind CSS
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/BartoszJarocki/cv.git
   ```

2. Move to the cloned directory

   ```bash
   cd cv
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the local server:

   ```bash
   yarn dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

6. Build for production:

   ```bash
   yarn build
   ```

   (build script uses the webpack bundler for compatibility with this setup)

# Run with Docker

Build the container

```
docker compose build
```

Run the container

```
docker compose up -d
```

Stop the Container

```
docker compose down 
```

# License

[MIT](https://choosealicense.com/licenses/mit/)
