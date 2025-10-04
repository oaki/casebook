#!/bin/bash

# Quick deployment script for AWS Lightsail Container Service
# This uses your existing MySQL database on Websupport

set -e

if [ -z "$1" ]; then
  echo "❌ Error: Service name required"
  echo "Usage: ./deploy-quick.sh <service-name>"
  echo "Example: ./deploy-quick.sh casebook-prod"
  exit 1
fi

SERVICE_NAME=$1
IMAGE_NAME="casebook"
TIMESTAMP=$(date +%Y%m%d%H%M%S)
IMAGE_TAG="${IMAGE_NAME}-${TIMESTAMP}"

echo "🚀 Casebook Deployment"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Service: ${SERVICE_NAME}"
echo "Image: ${IMAGE_TAG}"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
  echo "❌ Docker is not running. Please start Docker and try again."
  exit 1
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
  echo "❌ AWS CLI is not installed."
  echo "Install it with: brew install awscli"
  exit 1
fi

echo "🏗️  Building Docker image..."
docker buildx build --platform linux/amd64 -t ${IMAGE_NAME}:latest -t ${IMAGE_NAME}:${TIMESTAMP} --load .

if [ $? -ne 0 ]; then
  echo "❌ Docker build failed"
  exit 1
fi

echo ""
echo "📦 Pushing image to Lightsail..."
aws lightsail push-container-image \
  --service-name ${SERVICE_NAME} \
  --label ${IMAGE_TAG} \
  --image ${IMAGE_NAME}:latest

if [ $? -ne 0 ]; then
  echo "❌ Push to Lightsail failed"
  echo "Make sure you have configured AWS CLI and the service exists."
  exit 1
fi

echo ""
echo "✅ Image pushed successfully!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Next steps:"
echo "1. Go to AWS Lightsail Console"
echo "2. Navigate to: Container Services → ${SERVICE_NAME}"
echo "3. Create a new deployment with image: ${IMAGE_TAG}"
echo ""
echo "🔐 Don't forget to set environment variables:"
echo "   • DATABASE_URL (tvoj MySQL connection string)"
echo "   • SHADOW_DATABASE_URL"
echo "   • SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS"
echo "   • NEXTAUTH_URL, NEXTAUTH_SECRET"
echo "   • JWT_SECRET"
echo "   • NODE_ENV=production"
echo ""
echo "🌐 Or use Web Console for easier setup!"
