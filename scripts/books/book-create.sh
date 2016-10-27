curl --include --request POST "http://localhost:4741/books/" \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "an example title",
      "author": "Rebekah"
    }
  }'
