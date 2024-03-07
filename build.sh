#!/bin/bash

# Function to handle errors
handle_error() {
    local lineno="$1"
    local message="$2"
    echo "Error at line $lineno: $message"
    # Exit with error code
    exit 1
}

# Set up error handling
trap 'handle_error ${LINENO} "$BASH_COMMAND"' ERR

# Install dependencies
npm install

# Apply Prisma migrations
echo "Applying Prisma migrations..."
npx prisma migrate deploy || {
    echo "Error applying Prisma migrations."
    exit 1
}

echo "Deployment completed successfully."
