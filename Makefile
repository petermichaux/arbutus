.PHONY: clean

SRCS = src/header.js                 \
       src/namespace.js              \
       src/parseHTML.js

build: $(SRCS)
	mkdir -p build
	cat $(SRCS) >build/arbutus.js
	jsmin <build/arbutus.js >build/arbutus-tmp.js
	cat src/header.js build/arbutus-tmp.js >build/arbutus-min.js
	rm build/arbutus-tmp.js

clean:
	rm -rf build
