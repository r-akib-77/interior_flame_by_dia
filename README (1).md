# Interior Flame by Dia

A fashion boutique storefront built with **Next.js 15**, **React 19**, and **TypeScript**. Interior Flame by Dia presents Pakistani-inspired clothing collections and gives customers a way to explore products and submit custom-order requests.

## Features

- **Brand landing page** introducing the label and its creative direction.
- **Shop and product detail pages** for browsing clothing, prices, descriptions, fabrics, styles, garment types, and stitching options.
- **Custom order page** for customers interested in personalized designs.
- **Admin dashboard** for managing collection content.
- **Collections API** for product/collection records.
- **Admin authentication utilities** using JWT-related tooling.
- **Media upload integration** configured for Cloudflare R2 through its S3-compatible API.
- **Cloudflare Pages configuration** for deployment.
- Responsive UI components and animation helpers.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| Next.js 15 | React framework and routing |
| React 19 | User interface |
| TypeScript | Type-safe application code |
| Tailwind CSS 4 | Styling |
| Framer Motion | UI animations |
| Lucide React and React Icons | Icons |
| React Hot Toast | Toast notifications |
| Cloudflare Pages | Hosting target |
| Cloudflare D1 | Database integration (binding name: `DB`) |
| Cloudflare R2 | Product image and media storage |
| JOSE | JWT-related authentication utilities |

## Project Structure

```text
.
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── admin/           # Admin dashboard
│   │   ├── api/
│   │   │   ├── auth/        # Authentication endpoints
│   │   │   ├── collections/ # Collection/product endpoints
│   │   │   └── upload/      # Media upload endpoint
│   │   ├── custom-order/    # Custom order page
│   │   ├── shop/            # Shop and product detail pages
│   │   ├── sections/        # Landing-page sections
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Shared UI components
│   ├── lib/                 # Authentication and utility modules
│   ├── mockData.ts          # Sample/fallback content
│   └── types.ts             # Shared TypeScript types
├── data.json                # Sample collection data
├── schema.sql               # SQL schema for collections
├── wrangler.toml            # Cloudflare Pages configuration
├── .env.example             # Environment variable template
└── package.json
```

## Getting Started

### Prerequisites

- Node.js compatible with the installed Next.js version
- npm
- A Cloudflare account if you plan to configure D1/R2 or deploy to Cloudflare

### 1. Clone the repository

```bash
git clone https://github.com/r-akib-77/interior_flame_by_dia.git
cd interior_flame_by_dia
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a local environment file based on the example:

```bash
cp .env.example .env.local
```

Update the values in `.env.local` for your environment. Never commit real credentials or production secrets.

| Variable | Description |
| --- | --- |
| `ADMIN_USERNAME` | Admin login username |
| `ADMIN_PASSWORD` | Admin login password |
| `JWT_SECRET` | Secret for signing/verifying authentication tokens; use a long, random value |
| `R2_S3_ENDPOINT` | Cloudflare R2 S3-compatible endpoint |
| `R2_ACCESS_KEY_ID` | R2 access key ID |
| `R2_SECRET_ACCESS_KEY` | R2 secret access key |
| `R2_BUCKET_NAME` | R2 bucket name |
| `R2_PUBLIC_URL` | Public base URL used for uploaded assets |
| `D1_DATABASE_ID` | Optional D1 database identifier; the app binding is configured in Cloudflare |

> **Security note:** Values in `.env.example` are examples/placeholders, not secure production credentials. Replace default admin credentials and the JWT secret before deployment.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server with Turbopack |
| `npm run build` | Build the application |
| `npm start` | Start the production Next.js server |
| `npm run lint` | Run ESLint |
| `npm run pages:build` | Build the app and run the Cloudflare Pages adapter |

## Cloudflare Configuration

The repository includes a `wrangler.toml` configuration targeting Cloudflare Pages and a SQL schema for collection records.

1. Create or select a Cloudflare D1 database.
2. Configure a D1 binding named `DB` in Cloudflare Pages project settings, or update the optional D1 configuration in `wrangler.toml` with the actual database ID.
3. Apply `schema.sql` to the D1 database.
4. Create a Cloudflare R2 bucket if product image uploads are needed, and configure the R2 variables in the deployment environment.
5. Add the required environment variables and secrets in Cloudflare Pages settings.
6. Run `npm run pages:build` for the Pages build workflow.

Cloudflare compatibility may depend on the Next.js features used by individual routes. Test the build, database binding, authentication, and upload flow in a staging environment before using the deployment in production.

## Product Data

The repository includes `data.json` and `src/mockData.ts` for sample or fallback collection data. Records include fields such as product name, price, description, image, style, fabric, garment type, and stitching type. The SQL table definition is in `schema.sql`.

## Development Notes

- Keep secrets in local environment files or your hosting provider's secret manager.
- Use unique, unpredictable production credentials.
- Verify admin authentication, file uploads, and database operations in the intended hosting environment before launch.
- Replace sample product information and imagery with approved store content before production use.

## License

No license is specified in this repository at the time this README was prepared. Contact the repository owner for permission before redistributing or reusing the project.

---

Built for **Interior Flame by Dia**.
