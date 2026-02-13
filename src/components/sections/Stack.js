import { site } from "../../content/site";
import { SectionHeader } from "../layout/SectionHeader";

export function Stack() {
    return (
        <section id="stack" className="section">
            <div className="container">
                <SectionHeader title="Tech Stack" desc="나열이 아니라, 실제로 다뤄본 범위를 중심으로 정리했습니다." />

                <div className="grid-cards">
                    {site.stackGroups.map((g) => (
                        <div key={g.group} className="card card--hover" style={{ padding: 18 }}>
                            <div style={{ fontWeight: 750 }}>{g.group}</div>
                            <ul className="list">
                                {g.items.map((i) => <li key={i}>{i}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}