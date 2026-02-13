import { site } from "../../content/site";
import { SectionHeader } from "../layout/SectionHeader";

export function Expertise() {
    return (
        <section className="section">
            <div className="container">
                <SectionHeader
                    title="Core Expertise"
                    desc="업무 시스템·데이터 흐름 중심으로 문제를 설계하고 구현합니다."
                    right="B2B / Internal Tools / Real-time"
                />

                <div className="grid-cards">
                    {site.expertise.map((x) => (
                        <div key={x.title} className="card card--hover" style={{ padding: 18 }}>
                            <div style={{ fontWeight: 750 }}>{x.title}</div>
                            <div className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>
                                {x.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
