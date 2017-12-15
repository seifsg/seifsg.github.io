import {NavbarText} from './navbar.text';

// Navbar english text
export class NavbarEn extends NavbarText {
    // static content
    home = 'Home';
    activities = 'Activities';
    currentActivity = 'Current Activity';
    activitiesLog = 'Activities Log';
    portfolio = 'Portfolio';
    about = 'About';
    blog = 'Blog';
    usefulResources = 'Useful Resources';

    // useful singleton here
    static init(): NavbarText {
        return new this();
    }
}
