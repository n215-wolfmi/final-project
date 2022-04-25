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
var aboutContent = `
<div class="about-hero"></div>
<div class="about-info">
    <p class="about-title">OUR HISTORY</p>
    <p class="about-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
`;
var galleryContent = `
<div class="title-container">
    <p class="gallery-title">GALLERY:</p>
</div>

<div class="gallery-section">
    <div class="gallery-1-2-3">
        <div class="gallery-1"><a href="#g1"><span class="gal-link"></span></a></div>
        <div class="gallery-2-3">
            <div class="gallery-2"><a href="#g2"><span class="gal-link"></span></a></div>
            <div class="gallery-3"><a href="#g3"><span class="gal-link"></span></a></div>
        </div>
    </div>
    <div class="gallery-1-2-3">
        <div class="gallery-4"><a href="#g4"><span class="gal-link"></span></a></div>
        <div class="gallery-5"><a href="#g5"><span class="gal-link"></span></a></div>
    </div>
</div>
`;
var blogContent = ``;
var contactContent = ``;

//gallery pages
var g1Content = `
<div class="gallery-template-hero1">
    <div class="g-title-container1">
        <p class="title-left">1.</p>
        <p class="title-right">food festival</p>
    </div>
</div>
<div class="g-template-info">
    <p class="g-desc-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="g-desc-right">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
`;
var g2Content = `
<div class="gallery-template-hero2">
    <div class="g-title-container2">
        <p class="title-left">2.</p>
        <p class="title-right">dee jay</p>
    </div>
</div>
<div class="g-template-info">
    <p class="g-desc-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="g-desc-right">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
`;
var g3Content = `
<div class="gallery-template-hero3">
    <div class="g-title-container3">
        <p class="title-left">3.</p>
        <p class="title-right">speech</p>
    </div>
</div>
<div class="g-template-info">
    <p class="g-desc-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="g-desc-right">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
`;
var g4Content = `
<div class="gallery-template-hero4">
    <div class="g-title-container4">
        <p class="title-left">4.</p>
        <p class="title-right">open foodfest</p>
    </div>
</div>
<div class="g-template-info">
    <p class="g-desc-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="g-desc-right">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
`;
var g5Content = `
<div class="gallery-template-hero5">
    <div class="g-title-container5">
        <p class="title-left">5.</p>
        <p class="title-right">international</p>
    </div>
</div>
<div class="g-template-info">
    <p class="g-desc-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p class="g-desc-right">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
`;

//blog pages
var b1Content = ``;
var b2Content = ``;
var b3Content = ``;
var b4Content = ``;
var b5Content = ``;

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