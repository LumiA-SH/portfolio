import { site } from "../../content/site";

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
                    <div>
                        <a href={site.links.email}>Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
