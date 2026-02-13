export function SectionHeader({ title, desc, right }) {
    return (
        <div className="section-head">
            <div>
                <h3 className="section-title">{title}</h3>
                {desc ? <p className="section-desc">{desc}</p> : null}
            </div>
            {right ? <div className="section-right">{right}</div> : null}
        </div>
    );
}
