#!/bin/bash

# Deployment script for AWS Lightsail Container Service
# Usage: ./deploy.sh <service-name>

set -e

if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh <service-name>"
  exit 1
fi

SERVICE_NAME=$1
IMAGE_NAME="casebook"
TIMESTAMP=$(date +%Y%m%d%H%M%S)
IMAGE_TAG="${IMAGE_NAME}-${TIMESTAMP}"

echo "🏗️  Building Docker image..."
docker build -t ${IMAGE_NAME}:latest -t ${IMAGE_NAME}:${TIMESTAMP} .

echo "📦 Pushing image to Lightsail..."
aws lightsail push-container-image \
  --service-name ${SERVICE_NAME} \
  --label ${IMAGE_TAG} \
  --image ${IMAGE_NAME}:latest

echo "✅ Image pushed successfully!"
echo ""
echo "Next steps:"
echo "1. Go to AWS Lightsail Console"
echo "2. Navigate to your container service: ${SERVICE_NAME}"
echo "3. Create a new deployment with the image: ${IMAGE_TAG}"
echo "4. Set environment variables (DATABASE_URL, NEXTAUTH_SECRET, etc.)"
echo "5. Deploy!"

