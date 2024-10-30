.PHONY: build zip

build:
	NEXT_PUBLIC_DIST=/hello-essential-work/pr-gekkan npm run build
build_stg:
	NEXT_PUBLIC_DIST=/hello-essential-work npm run build

zip:
	rm -rf out/**/.DS_Store
	@rm -rf pr-gekkan/*
	@cp -r out pr-gekkan
	@zip -r pr-gekkan.zip pr-gekkan
	@rm -rf pr-gekkan

