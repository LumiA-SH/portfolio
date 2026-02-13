import { site } from "../../content/site";
import {
    FaJava,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaWindows,
    FaDatabase,
    FaCode
} from "react-icons/fa";

const iconMap = {
    java: FaJava,

    spring: FaCode,      // Spring은 일반 코드 아이콘
    csharp: FaCode,      // C#도 FaCode로 처리
    dotnet: FaCode,      // .NET도 동일
    mssql: FaDatabase,
    Oracle: FaDatabase,

    react: FaReact,
    js: FaCode,
    html: FaHtml5,
    css: FaCss3Alt,

    git: FaGitAlt,
    github: FaGithub,
    windows: FaWindows,

    rest: null,
};


export function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h3 className="section-title">Skills</h3>
                <p className="section-desc">{site.skills?.intro}</p>

                {site.skills?.categories?.map((cat) => (
                    <div key={cat.title} className="skill-category">
                        <h4 className="skill-category-title">{cat.title}</h4>

                        <div className="skills-grid">
                            {cat.items.map((it) => {
                                const Icon = iconMap[it.key];
                                return (
                                    <div key={it.key} className="skill-card">
                                        <div className="skill-icon">
                                            {Icon ? <Icon /> : <span className="skill-fallback">◎</span>}
                                        </div>
                                        <div className="skill-name">{it.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
