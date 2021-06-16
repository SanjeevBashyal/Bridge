import './MenuButton.css'
const MenuButton = () => {

    // const menu = ()=>{
    //     const e = new TimelineMax({
    //         paused: !0
    //     });
    //     open ? (getId("hamburger").setAttribute("aria-expanded", "false"),
    //     open = !1,
    //     e.to("#bar1, #bar3", .5, {
    //         rotation: 0,
    //         y: 0,
    //         ease: Expo.easeOut
    //     }, 0).to("#bar2", .5, {
    //         width: "100%",
    //         x: 0,
    //         ease: Expo.easeOut
    //     }, 0).to("#menu-close", .5, {
    //         autoAlpha: 0,
    //         onComplete: ()=>closed = !1
    //     }, 0).to("#menu", 1, {
    //         width: 0,
    //         ease: Expo.easeOut
    //     }, 0).to("#menu-navigation", .5, {
    //         autoAlpha: 0
    //     }, 0).to(".primary, .secondary", .1, {
    //         autoAlpha: 0,
    //         overwrite: !0,
    //         ease: Linear.easeNone
    //     }, 0)) : (getId("hamburger").setAttribute("aria-expanded", "true"),
    //     open = !0,
    //     e.to("#bar1", .5, {
    //         rotation: 45,
    //         y: 4,
    //         ease: Expo.easeOut
    //     }, 0).to("#bar2", .5, {
    //         width: "0%",
    //         x: 8,
    //         ease: Expo.easeOut
    //     }, 0).to("#bar3", .5, {
    //         rotation: -45,
    //         y: -4,
    //         ease: Expo.easeOut
    //     }, 0).to("#menu-close", 1, {
    //         autoAlpha: 1
    //     }, 0).to("#menu", 1, {
    //         width: innerWidth <= 600 ? 290 : 350,
    //         ease: Expo.easeOut
    //     }, 0).to("#menu-navigation", .5, {
    //         autoAlpha: 1
    //     }, 0).staggerFromTo(innerWidth <= 960 ? ".primary, .secondary" : ".secondary", 1, {
    //         y: 15,
    //         autoAlpha: 0
    //     }, {
    //         y: 0,
    //         autoAlpha: 1,
    //         ease: Expo.easeOut
    //     }, .05, .1).fromTo("#menu-background", 1, {
    //         skewX: 5
    //     }, {
    //         skewX: 0,
    //         ease: Expo.easeOut
    //     }, 0)),
    //     e.restart()
    // }

    return ( 
        <div className="menu-nav">
            <div id="menu-close"></div>
            {/* <div id="menu">
                <div id="menu-background"></div>
                <div id="menu-navigation">
                <ul className="nav-links">
                    <li className="nav-item primary"><a href="/vehicles/falcon-9/">Falcon 9</a></li>
                    <li className="nav-item primary"><a href="/vehicles/falcon-heavy/">Falcon Heavy</a></li>
                    <li className="nav-item primary"><a href="/vehicles/dragon/">Dragon</a></li>
                    <li className="nav-item primary"><a href="/vehicles/starship/">Starship</a></li>
                    <li className="nav-item primary"><a href="/human-spaceflight/">Human Spaceflight</a></li>
                    <li className="nav-item primary"><a href="/rideshare/">Rideshare</a></li>
                    <li className="nav-item secondary"><a href="/mission/">Mission</a></li>
                    <li className="nav-item secondary"><a href="/launches/">Launches</a></li>
                    <li className="nav-item secondary"><a href="/careers/">Careers</a></li>
                    <li className="nav-item secondary"><a href="/updates/">Updates</a></li>
                    <li className="nav-item secondary"><a href="https://shop.spacex.com/" rel="noopener" target="_blank">Shop</a></li>
                </ul>
                </div>
            </div> */}
            <button id="hamburger" aria-expanded="false" aria-controls="menu" aria-label="Menu">
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
            </button>
        </div>
     );
}
 
export default MenuButton;