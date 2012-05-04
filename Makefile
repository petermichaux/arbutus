.PHONY: clean

SRCS = src/header.js                 \
       src/namespace.js              \
       src/parseHTML.js

build: $(SRCS)
	mkdir -p build
	cat $(SRCS) >build/abeja.js
	jsmin <build/abeja.js >build/abeja-tmp.js
	cat src/header.js build/abeja-tmp.js >build/abeja-min.js
	rm build/abeja-tmp.js

clean:
	rm -rf build
