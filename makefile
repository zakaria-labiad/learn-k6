install:
	npm install
	npm ci

run:
	npm run dev

test:
	npm run test

k6:
	docker run --rm \
		-e K6_HOST \
		-e PORT \
		-e K6_VUS \
		-e K6_DURATION \
		-v "$(PWD)/scripts:/scripts" \
		grafana/k6 run /scripts/k6.ts
