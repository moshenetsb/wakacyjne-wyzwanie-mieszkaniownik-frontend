#!/bin/bash

set -e

ENVIRONMENT=${1:-production}
REVISION=${2:-0}
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Rolling back deployment in $ENVIRONMENT environment..."

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

if [ "$ENVIRONMENT" == "production" ]; then
    CLUSTER_NAME="mieszkaniownik-prod-cluster"
    CLUSTER_ZONE="europe-central2-a"
    NAMESPACE="production"
else
    CLUSTER_NAME="mieszkaniownik-dev-cluster"
    CLUSTER_ZONE="europe-central2-a"
    NAMESPACE="development"
fi

echo -e "${YELLOW}Connecting to GKE cluster: $CLUSTER_NAME${NC}"
gcloud container clusters get-credentials $CLUSTER_NAME --zone $CLUSTER_ZONE

echo -e "${YELLOW}Current deployment history:${NC}"
kubectl rollout history deployment/mieszkaniownik-frontend -n $NAMESPACE

if [ "$REVISION" == "0" ]; then
    echo -e "${YELLOW}Rolling back to previous revision...${NC}"
    kubectl rollout undo deployment/mieszkaniownik-frontend -n $NAMESPACE
else
    echo -e "${YELLOW}Rolling back to revision $REVISION...${NC}"
    kubectl rollout undo deployment/mieszkaniownik-frontend -n $NAMESPACE --to-revision=$REVISION
fi

echo -e "${YELLOW}Waiting for rollback to complete...${NC}"
kubectl rollout status deployment/mieszkaniownik-frontend -n $NAMESPACE --timeout=5m

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Rollback successful!${NC}"
else
    echo -e "${RED}Rollback failed!${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}=== Current Deployment Status ===${NC}"
kubectl get pods -n $NAMESPACE -l app.kubernetes.io/name=mieszkaniownik-frontend

echo ""
echo -e "${GREEN}Rollback completed successfully!${NC}"
