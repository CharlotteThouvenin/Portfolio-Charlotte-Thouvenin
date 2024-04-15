import traduction from "./traduction"
import { useContext } from "react"
import { LanguageContext } from "../../contextLang"
import AboutTimeline from "../../Components/TimeLine"

export const About = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="shadow-sm p-3 mb-5 bg-body rounded">
            <div className="row">
                <h1>{traduction[language].aboutMeTitle}</h1>
                <div className="col-md-6 p-4 col-12">

                    <p>{traduction[language].aboutMeDescription}</p>
                    <p>{traduction[language].aboutMeText}</p>
                </div>
                <div className="col-md-6 col-12">
                    <h3 className="text-center p-4">{traduction[language].timeLineTitle}</h3>
                    <AboutTimeline />
                </div>
            </div>

        </div>
    )
}