# exit on error
set -o errexit

# dependencies
npm install

# primsa ORM set up
npx prisma generate
npx prisma migrate deploy

