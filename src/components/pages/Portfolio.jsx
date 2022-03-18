import React from "react";
import PortfolioCard from "../sub-components/CardTwo";
import "../css-components/bootstrap.min.css";
import "../css-components/portfolio.css";
import "../js-components/appindex";
import portfolioData from "../component-data/portfolioData";


function Portfolio(){
    return(
        <main>
            <div className="portfolioHeader">
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 id="titleHeader">Experience the Colours!</h1>
                        <p className="lead">
                                Something short and leading 
                                about the collection below—its contents, the creator, etc. 
                                Make it short and sweet, but not too short so folks don’t 
                                simply skip over it entirely.
                        </p>
                    </div>
                    </div>
                </section>
            </div>
            

            <div className="album py-5">
                <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {portfolioData.map((data) => {
                        return(
                            <div className="col" key={data.id}>
                                <PortfolioCard
                                    portfolioPreview={data.cardPreview}
                                    title={data.cardTitle}
                                    content={data.cardContent}
                                    dateCreated={data.cardDateOfCreation}
                                />
                            </div>)
                    })}
                    
                </div>
                </div>
            </div>

        </main>
    )
}


export default Portfolio;