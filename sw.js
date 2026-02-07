self.addEventListener("install", event => {
    event; waituntil(
        caches.open("calculator-cache").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./style.css",
                "./script.js"
            ]);
        }
        )
    );
}
);

self.addEventListener("fetch", event => {
    event.respondwith(
        cache.match(event.request).then(Response => {
            return Response ||
                fetch(event.request);
        }
        )
    );
});