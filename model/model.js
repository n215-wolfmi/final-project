//MODEL\\
var homeContent = `
<div class="home-hero">
            <div class="home-banner">
                <p class="home-title">Header goes here</p>
                <p class="home-subtitle">Less important text goes here</p>
                <p class="home-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Fugiat aliquid minus nemo sed est.</p>
                <a href="#about" class="site-btn">Read More</a>
            </div>
        </div>
        
        <div class="quote-section">
            <div class="quote-div">
                <p class="quote">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"</p>
                <p class="client-name">John Smith</p>
                <p class="client-job">Corporation CEO, books author.</p>
            </div>
        </div>

        <div class="events-section">
            <div class="events-title">UPCOMING EVENTS:</div>
            <div class="events-calendar">
                <div class="events-split">
                    <div class="events-box">
                        <div class="ebox-left">
                            <div class="ebtn-container">
                                <p class="date-num">06</p>
                                <p class="date-month">JUN</p>
                                <a href="#06JUN">
                                    <span class="ebtn-link"></span>
                                </a>
                            </div>
                        </div>
                        <div class="ebox-right">
                            <p class="ebox-title">Sed et persipiatis unde omnis iste natus</p>
                            <p class="ebox-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
                        </div>
                        
                    </div>
                    <div class="events-box">
                        <div class="ebox-left">
                            <div class="ebtn-container">
                                <p class="date-num">30</p>
                                <p class="date-month">JUL</p>
                                <a href="#30JUL">
                                    <span class="ebtn-link"></span>
                                </a>
                            </div>
                        </div>
                        <div class="ebox-right">
                            <p class="ebox-title">Sed et persipiatis unde omnis iste natus</p>
                            <p class="ebox-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div class="events-split">
                    <div class="events-box">
                        <div class="ebox-left">
                            <div class="ebtn-container">
                                <p class="date-num">30</p>
                                <p class="date-month">AUG</p>
                                <a href="#30AUG">
                                    <span class="ebtn-link"></span>
                                </a>
                            </div>
                        </div>
                        <div class="ebox-right">
                            <p class="ebox-title">Sed et persipiatis unde omnis iste natus</p>
                            <p class="ebox-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
                        </div>
                    </div>
                    <div class="events-box">
                        <div class="ebox-left">
                            <div class="ebtn-container">
                                <p class="date-num">23</p>
                                <p class="date-month">NOV</p>
                                <a href="#23NOV">
                                    <span class="ebtn-link"></span>
                                </a>
                            </div>
                        </div>
                        <div class="ebox-right">
                            <p class="ebox-title">Sed et persipiatis unde omnis iste natus</p>
                            <p class="ebox-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
                        </div>
                        
                    </div>
                </div>
                <div class="events-split">
                    <div class="events-box">
                        <div class="ebox-left">
                            <div class="ebtn-container">
                                <p class="date-num">23</p>
                                <p class="date-month">DEC</p>
                                <a href="#23DEC">
                                    <span class="ebtn-link"></span>
                                </a>
                            </div>
                        </div>
                        <div class="ebox-right">
                            <p class="ebox-title">Sed et persipiatis unde omnis iste natus</p>
                            <p class="ebox-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;
var aboutContent = ``;


//inserts page content into app div
//recieves pageName from app.js
export function modelPageName(pgName) {
    console.log(pgName);
    $("#app").html(eval(pgName)); //execute the new variable, insert into html

    //nav links black and white change
    if(pgName == "homeContent") {
        $("nav .links a").removeClass("links-black").addClass("links-white")
    } else {
        $("nav .links a").removeClass("links-white").addClass("links-black")
    }

    //nav logo black and white change
    if(pgName == "homeContent") {
        $("nav .logo").removeClass("logo-black").addClass("logo-white")
    } else {
        $("nav .logo").removeClass("logo-white").addClass("logo-black")
    }

    //nav border black and white change
    if(pgName == "homeContent") {
        $("nav").removeClass("border-black").addClass("border-white")
    } else {
        $("nav").removeClass("border-white").addClass("border-black")
    }

    try {
        eval(pgName);
        $("#app").html(eval(pgName));
    } catch (e) {
        console.log("CAUGHT AN ERROR", e)
    }
}