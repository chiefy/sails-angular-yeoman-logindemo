
TESTS = api/test/spec/**/*.js
REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout 600 \
		$(TESTS)

.PHONY: test