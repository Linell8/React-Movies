function Footer() {
    return <footer className="page-footer light-green darken-4">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Create by Elina Maslova
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
</footer>
}

export { Footer };