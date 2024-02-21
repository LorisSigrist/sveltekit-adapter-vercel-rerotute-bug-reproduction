export function reroute({ url }) {
    if (url.pathname === "/some-page") {
        return "/"
    }
}