.PHONY: update clean

all:


# ==============================================================================
# Dependencies
# ==============================================================================

install: vendor
	# ┌─────────────────────────────┐
	# │ Dependencies are up-to-date │
	# └─────────────────────────────┘

vendor: composer.phar composer.json Makefile
	[ -e composer.lock ] && php5 -d memory_limit=-1 composer.phar update || php5 -d memory_limit=-1 composer.phar install
	touch vendor

composer.phar:
	curl -s http://getcomposer.org/installer | php5
	# ┌──────────────────────────────────────┐
	# │ Downloaded Composer in composer.phar │
	# └──────────────────────────────────────┘

update: composer.phar composer.json Makefile
	[ -e composer.lock ] && php5 -d memory_limit=-1 composer.phar update || php5 -d memory_limit=-1 composer.phar install
	# ┌────────────────────────────────────────────┐
	# │ Updated Composer dependencies successfully │
	# └────────────────────────────────────────────┘


# ==============================================================================
# Testing
# ==============================================================================

test: install
	make lint && \
	vendor/bin/php5unit --coverage-html build/logs/coverage --coverage-text=build/logs/coverage.txt && \
	echo && \
	echo ======== Code coverage ======== && \
	cat build/logs/coverage.txt | grep -A3 Summary | tail -n 3 && \
	echo ===============================

lint: install
	vendor/bin/php5cs -p --standard=PSR1 config src tests index.php5 | tee /tmp/php5cs.log \
	&& vendor/bin/php5cs -p --standard=PSR2 config src tests index.php5 | tee -a /tmp/php5cs.log \
	&& echo " TOTAL   $$(grep ERROR /tmp/php5cs.log | wc -l) ERRORS" \
	&& echo "         $$(grep WARNING /tmp/php5cs.log | wc -l) WARNINGS" \
	&& echo \
	&& rm /tmp/php5cs.log

# ==============================================================================
# Cleaning
# ==============================================================================

clean:
	[ ! -d vendor ] || rm -Rf vendor
	[ ! -e composer.lock ] || rm -f composer.lock
	[ ! -e composer.phar ] || rm -f composer.phar
	[ ! -d tests/_files ] || rm -Rf tests/_files
	[ ! -e tests/_files.tar.gz ] || rm -Rf tests/_files.tar.gz
	# ┌─────────┐
	# │ Cleaned │
	# └─────────┘
