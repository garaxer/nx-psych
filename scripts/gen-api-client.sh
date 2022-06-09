rm -rf ./libs/shared-types/src/lib/api/generated
openapi-generator-cli generate \
  -i ./openapi.json \
  -g typescript-axios \
  -o ./libs/shared-types/src/lib/api/generated \
  --package-name api \
  --additional-properties=useSingleRequestParameter=true
