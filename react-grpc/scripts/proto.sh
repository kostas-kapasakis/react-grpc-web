BASEDIR=$(dirname "$0")
cd  src/proto/


PROTOC_GEN_TS_PATH=".././node_modules/.bin/protoc-gen-ts"

OUT_DIR="./"

    protoc   \
    --plugin=PROTOC_GEN_TS_PATH} \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    accounts.proto chat.proto