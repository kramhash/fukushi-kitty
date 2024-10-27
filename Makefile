.PHONY: build

build:
	NEXT_PUBLIC_DIST=/hello-essential-work/pr-gekkan npm run build
build_stg:
	NEXT_PUBLIC_DIST=/hello-essential-work npm run build