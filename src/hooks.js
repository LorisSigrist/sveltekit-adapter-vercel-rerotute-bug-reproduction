export function reroute({ url }) {
    if (url.pathname === "/some-page") {
        return "/"
    }

    if(url.pathname === "/some-other-page") {
        return "/page-1"
    }
}